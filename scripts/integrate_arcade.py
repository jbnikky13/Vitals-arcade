from pathlib import Path

path = Path('index.html')
text = path.read_text(encoding='utf-8')

scripts = '''\n<!-- VITALS_ARCADE_META -->\n<script src="shared/arcade-state.js"></script>\n<script src="shared/arcade-enhancements.js"></script>\n<script src="shared/arcade-panel.js"></script>\n'''
if 'shared/arcade-panel.js' not in text:
    text = text.replace('</body>', scripts + '</body>', 1)

marker = '<!-- VITALS_ARCADE_NEW_GAMES -->'
if marker not in text:
    block = '''\n<section id="vitals-new-games" style="margin:22px 0;padding:16px;border:1px solid #24455c;border-radius:14px;background:linear-gradient(180deg,#17324a,#12293b)">\n  <div style="font:700 11px monospace;letter-spacing:1.5px;color:#f2a93b;margin-bottom:12px">NEW ARCADE CHALLENGES</div>\n  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">\n    <a href="games/pong/" style="text-decoration:none;color:inherit;border:1px solid #24455c;border-radius:10px;padding:12px;background:#081620"><b>🏓 Pong</b><br><small style="color:#7f98a3">Neon arcade</small></a>\n    <a href="games/solve/" style="text-decoration:none;color:inherit;border:1px solid #24455c;border-radius:10px;padding:12px;background:#081620"><b>⚡ Solve</b><br><small style="color:#7f98a3">Beat the clock</small></a>\n    <a href="games/word/" style="text-decoration:none;color:inherit;border:1px solid #24455c;border-radius:10px;padding:12px;background:#081620"><b>🔤 Word Rush</b><br><small style="color:#7f98a3">Unscramble fast</small></a>\n  </div>\n</section>\n''' + marker + '\n'
    text = text.replace('</main>', block + '</main>', 1)

path.write_text(text, encoding='utf-8')
