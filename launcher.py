# -*- coding: utf-8 -*-
"""
Global Macro Briefing - 데스크톱 단독 앱 런처 & 키워드/출처 관리 백엔드
- 내장 스레드 HTTP 서버 구동 (포트 자동 탐색)
- Edge 데스크톱 앱 창 (--app) 모드 또는 기본 브라우저로 화면 팝업
- 키워드 & 출처 저장 및 크롤러 즉시 재실행 API 연동 (/api/save_keywords, /api/save_sources, /api/run_crawler)
"""

import os
import sys
import time
import json
import socket
import threading
import subprocess
import webbrowser
from http.server import SimpleHTTPRequestHandler

try:
    from http.server import ThreadingHTTPServer
except ImportError:
    from socketserver import ThreadingMixIn
    from http.server import HTTPServer
    class ThreadingHTTPServer(ThreadingMixIn, HTTPServer):
        daemon_threads = True

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
KEYWORDS_PATH = os.path.join(BASE_DIR, "keywords.json")
SOURCES_PATH = os.path.join(BASE_DIR, "sources.json")

class CustomHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        if self.path == "/api/get_keywords":
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.end_headers()
            if os.path.exists(KEYWORDS_PATH):
                with open(KEYWORDS_PATH, "r", encoding="utf-8") as f:
                    self.wfile.write(f.read().encode('utf-8'))
            else:
                self.wfile.write(b'{}')
            return

        if self.path == "/api/get_sources":
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.end_headers()
            if os.path.exists(SOURCES_PATH):
                with open(SOURCES_PATH, "r", encoding="utf-8") as f:
                    self.wfile.write(f.read().encode('utf-8'))
            else:
                self.wfile.write(b'[]')
            return

        super().do_GET()

    def do_POST(self):
        if self.path == "/api/save_keywords":
            content_len = int(self.headers.get('Content-Length', 0))
            post_body = self.rfile.read(content_len)
            try:
                data = json.loads(post_body.decode('utf-8'))
                with open(KEYWORDS_PATH, "w", encoding="utf-8") as f:
                    json.dump(data, f, ensure_ascii=False, indent=2)
                self.send_response(200)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps({"success": True, "message": "키워드가 성공적으로 저장되었습니다."}).encode('utf-8'))
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps({"success": False, "error": str(e)}).encode('utf-8'))
            return

        if self.path == "/api/save_sources":
            content_len = int(self.headers.get('Content-Length', 0))
            post_body = self.rfile.read(content_len)
            try:
                data = json.loads(post_body.decode('utf-8'))
                with open(SOURCES_PATH, "w", encoding="utf-8") as f:
                    json.dump(data, f, ensure_ascii=False, indent=2)
                self.send_response(200)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps({"success": True, "message": "출처 목록이 성공적으로 저장되었습니다."}).encode('utf-8'))
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps({"success": False, "error": str(e)}).encode('utf-8'))
            return

        if self.path == "/api/run_crawler":
            def run_job():
                subprocess.run([sys.executable, os.path.join(BASE_DIR, "crawler_runner.py")])

            threading.Thread(target=run_job, daemon=True).start()

            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.end_headers()
            self.wfile.write(json.dumps({"success": True, "message": "크롤러가 백그라운드에서 실행되었습니다."}).encode('utf-8'))
            return

        super().do_POST()

    def log_message(self, format, *args):
        pass

def find_free_port():
    """충돌 없는 로컬 포트 자동 할당"""
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(('127.0.0.1', 0))
        return s.getsockname()[1]

def launch_app_window(url):
    """Windows Edge 브라우저를 주소창 없는 단독 데스크톱 앱 창으로 팝업 (없으면 기본 브라우저)"""
    edge_paths = [
        r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
        r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
        os.path.expandvars(r"%LOCALAPPDATA%\Microsoft\Edge\Application\msedge.exe")
    ]
    edge_exe = None
    for p in edge_paths:
        if os.path.exists(p):
            edge_exe = p
            break

    if edge_exe:
        try:
            subprocess.Popen([edge_exe, f"--app={url}", "--window-size=1380,920"])
            return
        except Exception:
            pass

    try:
        os.startfile(url)
    except Exception:
        webbrowser.open(url)

def main():
    port = find_free_port()
    server = ThreadingHTTPServer(('127.0.0.1', port), CustomHandler)
    server_thread = threading.Thread(target=server.serve_forever, daemon=True)
    server_thread.start()

    url = f"http://127.0.0.1:{port}/index.html"
    print("=" * 60)
    print("  [Global Macro Briefing] 웹 브리핑 대시보드를 시작합니다...")
    print(f"  URL: {url}")
    print("=" * 60)

    time.sleep(0.3)
    launch_app_window(url)

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\n서버가 종료되었습니다.")
        sys.exit(0)

if __name__ == "__main__":
    main()
