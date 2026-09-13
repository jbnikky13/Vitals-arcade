from pathlib import Path

path = Path('index.html')
text = path.read_text(encoding='utf-8')
old = "var GAMES = [HoldSteady, ReflexTest, PulseTap, SteadyHand, BalanceTest, TapSpeed, MemoryMatch, BreathingPacer, MathRush, SequenceRecall, WordRush, OddOneOut];"
new = '''var HubPong = {
    id: 'pong',
    title: 'Neon Pong',
    tagline: 'Classic Pong with stages, difficulty, touch controls, and music.',
    path: 'games/pong/',
    previewInit: function(el){
      el.innerHTML = '<div class="mp-bar"></div><div class="mp-ball"></div>';
      var ball = el.querySelector('.mp-ball');
      var t = 0;
      return function(){
        t += 0.055;
        ball.style.left = (10 + (Math.sin(t)*0.5+0.5)*80) + '%';
      };
    },
    render: function(){ window.location.href = this.path; },
    cleanup: function(){}
  };

  var HubSolve = {
    id: 'solve',
    title: 'Solve in Seconds',
    tagline: 'Fast logic, number, pattern, and trick puzzles with verified answers.',
    path: 'games/solve/',
    previewInit: function(el){
      el.innerHTML = '<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-family:Space Mono,monospace;font-size:18px;color:var(--trace);font-weight:700;">? + ? =</div>';
      return function(){};
    },
    render: function(){ window.location.href = this.path; },
    cleanup: function(){}
  };

  var GAMES = [HubPong, HubSolve, HoldSteady, ReflexTest, PulseTap, SteadyHand, BalanceTest, TapSpeed, MemoryMatch, BreathingPacer, MathRush, SequenceRecall, WordRush, OddOneOut];'''

if 'var HubPong =' not in text:
    if old not in text:
        raise SystemExit('GAMES registry not found')
    path.write_text(text.replace(old, new, 1), encoding='utf-8')
    print('Hub updated')
else:
    print('Hub already updated')
