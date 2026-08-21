"""
Local HTTP Web Preview Server for Global Macro Briefing.
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8530

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Disable cache for local live preview
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

def run_server():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(base_dir)

    url = f"http://localhost:{PORT}/index.html"
    print("=" * 60)
    print("  [Global Macro Briefing] Local Web Server Started!")
    print(f"  URL: {url}")
    print("  Press Ctrl+C to stop the server.")
    print("=" * 60)

    webbrowser.open(url)

    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
            sys.exit(0)

if __name__ == "__main__":
    run_server()
