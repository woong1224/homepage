#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
웹서버 실행 스크립트
캐스터 드라마 상세페이지를 로컬에서 실행합니다.
"""

import http.server
import socketserver
import webbrowser
import os
import sys
from pathlib import Path

def main():
    """메인 함수: 웹서버를 시작하고 브라우저를 엽니다."""
    
    # 현재 디렉토리 확인
    current_dir = Path.cwd()
    print(f"📁 현재 디렉토리: {current_dir}")
    
    # index.html 파일 존재 확인
    index_file = current_dir / "index.html"
    if not index_file.exists():
        print("❌ 오류: index.html 파일을 찾을 수 없습니다.")
        print("   현재 디렉토리에 index.html, styles.css, script.js 파일이 있는지 확인해주세요.")
        return
    
    # 포트 설정
    PORT = 8000
    
    # 핸들러 설정
    Handler = http.server.SimpleHTTPRequestHandler
    
    try:
        # 서버 시작
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print(f"🚀 웹서버가 시작되었습니다!")
            print(f"📍 주소: http://localhost:{PORT}")
            print(f"📂 서빙 디렉토리: {current_dir}")
            print("\n" + "="*50)
            print("💡 브라우저가 자동으로 열립니다.")
            print("   서버를 중지하려면 Ctrl+C를 누르세요.")
            print("="*50 + "\n")
            
            # 브라우저 자동 열기
            webbrowser.open(f"http://localhost:{PORT}")
            
            # 서버 실행
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n\n🛑 서버가 중지되었습니다.")
        print("   감사합니다! 👋")
        
    except OSError as e:
        if "Address already in use" in str(e):
            print(f"❌ 오류: 포트 {PORT}가 이미 사용 중입니다.")
            print("   다른 포트를 사용하거나 기존 서버를 종료해주세요.")
        else:
            print(f"❌ 서버 시작 오류: {e}")
            
    except Exception as e:
        print(f"❌ 예상치 못한 오류: {e}")

if __name__ == "__main__":
    main() 