var ARCHIVE_ITEM = "music";
var LOCUCOES_URL = "locucoes_finais";

// ========== BACKGROUND SLIDESHOW ==========
(function() {
    var bgEl = document.getElementById('bgSlideshow');
    if (!bgEl) return;
    var bgImages = ['img/cristo.jpg', 'img/pao_de_acucar.jpg', 'img/ipanema.jpg'];
    var bgIndex = 0;
    bgEl.style.backgroundImage = 'url(' + bgImages[0] + ')';
    setInterval(function() {
        bgEl.style.opacity = '0';
        setTimeout(function() {
            bgIndex = (bgIndex + 1) % bgImages.length;
            bgEl.style.backgroundImage = 'url(' + bgImages[bgIndex] + ')';
            bgEl.style.opacity = '1';
        }, 1500);
    }, 8000);
})();

function updateClock() {
    var now = new Date();
    var opts = { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    document.getElementById('clock').textContent = now.toLocaleTimeString('pt-BR', opts);
    var dOpts = { timeZone: 'America/Sao_Paulo', weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
    document.getElementById('clockDate').textContent = now.toLocaleDateString('pt-BR', dOpts);
}
setInterval(updateClock, 1000);
updateClock();

function getRioHour() {
    var parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Sao_Paulo', hour: '2-digit', hour12: false }).formatToParts(new Date());
    var found = parts.find(function(p) { return p.type === 'hour'; });
    return found ? parseInt(found.value, 10) : new Date().getHours();
}

var schedule = [
    { time: "00:00 - 02:00", name: "Madrugada Tranquila", desc: "Suaves e relaxantes", icon: "\u{1F319}" },
    { time: "02:00 - 04:00", name: "Noite Eletronica", desc: "Eletronica e ambient", icon: "\u{1F3A7}" },
    { time: "04:00 - 06:00", name: "Aurora do Amanhecer", desc: "Classicos suaves", icon: "\u{1F305}" },
    { time: "06:00 - 08:00", name: "Bom Dia Rio!", desc: "Noticias e boa energia", icon: "\u2600\uFE0F" },
    { time: "08:00 - 10:00", name: "Manha Show", desc: "Musica brasileira", icon: "\u{1F3B5}" },
    { time: "10:00 - 12:00", name: "Pires Hits", desc: "Maiores sucessos", icon: "\u{1F525}" },
    { time: "12:00 - 14:00", name: "Almoco Cultural", desc: "MPB, Samba e Pagode", icon: "\u{1F37D}\uFE0F" },
    { time: "14:00 - 16:00", name: "Tarde de Rock", desc: "Rock nacional e intl.", icon: "\u{1F3B8}" },
    { time: "16:00 - 18:00", name: "Flashback", desc: "Classicos de todos tempos", icon: "\u23EA" },
    { time: "18:00 - 20:00", name: "Happy Hour", desc: "Sertanejo e Pop", icon: "\u{1F389}" },
    { time: "20:00 - 22:00", name: "Noite de Samba", desc: "Samba, Pagode e Axe", icon: "\u{1F3B6}" },
    { time: "22:00 - 00:00", name: "Sessao Especial", desc: "Entrevistas e musica", icon: "\u{1F399}\uFE0F" }
];

function renderSchedule() {
    var grid = document.getElementById('scheduleGrid');
    if (!grid) return;
    var ch = getRioHour();
    grid.innerHTML = schedule.map(function(item) {
        var s = parseInt(item.time.split(' - ')[0].split(':')[0]);
        var e = parseInt(item.time.split(' - ')[1].split(':')[0]);
        var cur = e > s ? (ch >= s && ch < e) : (ch >= s || ch < e);
        return '<div class="schedule-item ' + (cur ? 'current' : '') + '">' +
            '<div class="schedule-time">' + item.time + '</div>' +
            '<div class="schedule-details"><h4>' + item.icon + ' ' + item.name + '</h4><p>' + item.desc + '</p></div>' +
            (cur ? '<div class="schedule-live"><i class="fas fa-circle"></i> AO VIVO</div>' : '') + '</div>';
    }).join('');
}
renderSchedule();
setInterval(renderSchedule, 60000);

(function() {
    var c = document.getElementById('particles');
    if (!c) return;
    for (var i = 0; i < 30; i++) {
        var p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.width = p.style.height = (Math.random() * 3 + 1) + 'px';
        p.style.animationDuration = (Math.random() * 15 + 10) + 's';
        p.style.animationDelay = (Math.random() * 10) + 's';
        p.style.opacity = Math.random() * 0.3 + 0.1;
        c.appendChild(p);
    }
})();

var DEFAULT_PLAYLIST = [
    { file: "001.mp3", artist: "Foreigner (cover)", song: "I Want To Know What Love Is" },
    { file: "002.mp3", artist: "Sophie Ellis-Bextor", song: "Murder On The Dancefloor" },
    { file: "003.mp3", artist: "4 Non Blondes", song: "What's Up" },
    { file: "004.mp3", artist: "Ace of Base", song: "Beautiful Life" },
    { file: "005.mp3", artist: "Adriana Calcanhotto", song: "Devolva-Me" },
    { file: "006.mp3", artist: "Alicia Keys & Jay-Z", song: "Empire State of Mind" },
    { file: "007.mp3", artist: "Amy Macdonald", song: "This Is The Life" },
    { file: "008.mp3", artist: "Amy Winehouse", song: "Back To Black" },
    { file: "009.mp3", artist: "Billy Idol", song: "Eyes Without a Face" },
    { file: "010.mp3", artist: "Billy Preston", song: "My Sweet Lord" },
    { file: "011.mp3", artist: "Boney M.", song: "Rasputin" },
    { file: "012.mp3", artist: "Breakaway", song: "Versao Original" },
    { file: "013.mp3", artist: "Caro Emerald", song: "A Night Like This" },
    { file: "014.mp3", artist: "Mauricio Manieri", song: "Classics" },
    { file: "015.mp3", artist: "Daniel", song: "Seus Beijos" },
    { file: "016.mp3", artist: "Desireless", song: "Voyage Voyage" },
    { file: "017.mp3", artist: "Dido", song: "White Flag" },
    { file: "018.mp3", artist: "Dire Straits", song: "Sultans Of Swing" },
    { file: "019.mp3", artist: "Elton John", song: "Sacrifice" },
    { file: "020.mp3", artist: "Enigma", song: "Sadeness" },
    { file: "021.mp3", artist: "Era", song: "Ameno" },
    { file: "022.mp3", artist: "Erasure", song: "Love To Hate You" },
    { file: "023.mp3", artist: "Erasure", song: "A Little Respect" },
    { file: "024.mp3", artist: "Eurythmics", song: "I Saved The World Today" },
    { file: "025.mp3", artist: "Eurythmics", song: "The Miracle Of Love" },
    { file: "026.mp3", artist: "Eurythmics", song: "There Must Be An Angel" },
    { file: "027.mp3", artist: "Eurythmics", song: "Why" },
    { file: "028.mp3", artist: "George Michael", song: "Careless Whisper" },
    { file: "029.mp3", artist: "Guto Loureiro", song: "Flashback 80/90/2000" },
    { file: "030.mp3", artist: "Guto Loureiro", song: "Eurodance 90" },
    { file: "031.mp3", artist: "Rod Stewart", song: "I Don't Want To Talk About It" },
    { file: "032.mp3", artist: "Mauricio Manieri", song: "In Your Eyes" },
    { file: "033.mp3", artist: "Lighthouse Family", song: "High" },
    { file: "034.mp3", artist: "Marisa Monte", song: "Pra Melhorar" },
    { file: "035.mp3", artist: "Marisa Monte", song: "Ainda Bem" },
    { file: "036.mp3", artist: "Marisa Monte", song: "Depois" },
    { file: "037.mp3", artist: "Marisa Monte", song: "Nao E Facil" },
    { file: "038.mp3", artist: "Marisa Monte", song: "Nao Va Embora" },
    { file: "039.mp3", artist: "Mauricio Manieri", song: "Bem Querer" },
    { file: "040.mp3", artist: "Mauricio Manieri", song: "Primavera" },
    { file: "041.mp3", artist: "Mauricio Manieri", song: "Se Quer Saber" },
    { file: "042.mp3", artist: "Mauricio Manieri", song: "Sua Cancao" },
    { file: "043.mp3", artist: "Nathan Evans", song: "Wellerman" },
    { file: "044.mp3", artist: "Nenhum de Nos", song: "Camila" },
    { file: "045.mp3", artist: "Opus & Gazebo", song: "I Like Chopin" },
    { file: "046.mp3", artist: "Paula Toller", song: "Amorosa" },
    { file: "047.mp3", artist: "Pet Shop Boys", song: "It's A Sin" },
    { file: "048.mp3", artist: "Pet Shop Boys", song: "West End Girls" },
    { file: "049.mp3", artist: "Peter Cetera", song: "Hard to Say I'm Sorry" },
    { file: "050.mp3", artist: "Nando Reis", song: "Por Onde Andei" },
    { file: "051.mp3", artist: "Ana Canas & Nando Reis", song: "Pra Voce Guardei o Amor" },
    { file: "052.mp3", artist: "R.E.M.", song: "Losing My Religion" },
    { file: "053.mp3", artist: "Rachid Taha", song: "Ya Rayah" },
    { file: "054.mp3", artist: "Rionegro & Solimoes", song: "A Gente Se Entrega" },
    { file: "055.mp3", artist: "Skank", song: "Tanto (I Want You)" },
    { file: "056.mp3", artist: "Mauricio Manieri", song: "Te Quero Tanto" },
    { file: "057.mp3", artist: "Telemensagem", song: "Boa Noite" },
    { file: "058.mp3", artist: "Vanessa da Mata", song: "Ainda Bem" },
    { file: "059.mp3", artist: "Vanessa da Mata", song: "Amado" },
    { file: "060.mp3", artist: "Vanessa da Mata", song: "Boa Sorte / Good Luck" },
    { file: "061.mp3", artist: "Vanessa da Mata", song: "Gente Feliz" },
    { file: "062.mp3", artist: "Vanessa da Mata", song: "So Voce e Eu" },
    { file: "063.mp3", artist: "Elton John", song: "Your Song" },
    { file: "064.mp3", artist: "Zeca Baleiro", song: "Price Tag" },
    { file: "065.mp3", artist: "Zeze Di Camargo & Luciano", song: "Pra Mudar a Minha Vida" },
    { file: "066.mp3", artist: "Telemensagem", song: "Boa Noite (Voz)" }
];

var playlist = [];
var PLAYLIST_LOADED = false;

function loadPlaylist(callback) {
    if (PLAYLIST_LOADED && callback) return callback();
    fetch('playlist.json?' + Date.now()).then(function(r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
    }).then(function(data) {
        if (data && data.length > 0) {
            playlist = data;
            PLAYLIST_LOADED = true;
            try { localStorage.setItem('piresfm_playlist_cache', JSON.stringify(data)); } catch(e) {}
        } else {
            throw new Error('empty');
        }
        if (callback) callback();
    }).catch(function() {
        try {
            var cached = JSON.parse(localStorage.getItem('piresfm_playlist_cache'));
            if (cached && cached.length > 0) { playlist = cached; PLAYLIST_LOADED = true; if (callback) callback(); return; }
        } catch(e) {}
        playlist = DEFAULT_PLAYLIST;
        PLAYLIST_LOADED = true;
        if (callback) callback();
    });
}

// ========== RADIO REAL ==========
var EPOCH = new Date('2025-01-01T00:00:00-03:00').getTime();
var AVG_SONG = 240;
var LOCUCAO_DURATION = 30;
var SONGS_PER_BLOCO = 3;
var BLOCO_DURATION = 120;
var CYCLE_DURATION = AVG_SONG * SONGS_PER_BLOCO + BLOCO_DURATION;

function getElapsedSeconds() {
    return (Date.now() - EPOCH) / 1000;
}

function getRadioTrackIndex() {
    var elapsed = getElapsedSeconds();
    var fullCycles = Math.floor(elapsed / CYCLE_DURATION);
    var timeInCycle = elapsed - (fullCycles * CYCLE_DURATION);
    var songInCycle = Math.floor(timeInCycle / AVG_SONG);
    if (songInCycle >= SONGS_PER_BLOCO) {
        songInCycle = 0;
        fullCycles++;
    }
    var index = (fullCycles * SONGS_PER_BLOCO + songInCycle) % playlist.length;
    return index;
}

function getRadioTrackOffset() {
    var elapsed = getElapsedSeconds();
    var timeInCycle = elapsed % CYCLE_DURATION;
    var songInCycle = Math.floor(timeInCycle / AVG_SONG);
    if (songInCycle >= SONGS_PER_BLOCO) return 0;
    var offset = timeInCycle - (songInCycle * AVG_SONG);
    return Math.min(offset, AVG_SONG - 1);
}

// ========== LOCUCAO ==========
var songsPlayed = 0;
var isAnnouncing = false;
var savedVolume = 0.8;
var locucaoAudio = null;
var lastLocucaoType = '';

var locucoesArquivos = {
    ident: ['ident_01.mp3','ident_02.mp3','ident_03.mp3','ident_04.mp3','ident_05.mp3','ident_06.mp3','ident_07.mp3','ident_08.mp3'],
    curiosidade: ['curiosidade_01.mp3','curiosidade_02.mp3','curiosidade_03.mp3','curiosidade_04.mp3','curiosidade_05.mp3','curiosidade_06.mp3','curiosidade_07.mp3','curiosidade_08.mp3','curiosidade_09.mp3','curiosidade_10.mp3','curiosidade_11.mp3','curiosidade_12.mp3','curiosidade_13.mp3','curiosidade_14.mp3','curiosidade_15.mp3','curiosidade_16.mp3','curiosidade_17.mp3','curiosidade_18.mp3','curiosidade_19.mp3','curiosidade_20.mp3'],
    noticia: ['noticia_01.mp3','noticia_02.mp3','noticia_03.mp3','noticia_04.mp3','noticia_05.mp3','noticia_06.mp3','noticia_07.mp3','noticia_08.mp3','noticia_09.mp3','noticia_10.mp3','noticia_11.mp3','noticia_12.mp3'],
    dica: ['dica_01.mp3','dica_02.mp3','dica_03.mp3','dica_04.mp3','dica_05.mp3','dica_06.mp3','dica_07.mp3'],
    programacao: ['programacao_01.mp3','programacao_02.mp3','programacao_03.mp3','programacao_04.mp3','programacao_05.mp3']
};

var horaIntros = ['hora_intro_01.mp3','hora_intro_02.mp3','hora_intro_03.mp3','hora_intro_04.mp3','hora_intro_05.mp3'];
var horaOutros = ['hora_outro_01.mp3','hora_outro_02.mp3','hora_outro_03.mp3','hora_outro_04.mp3','hora_outro_05.mp3'];

function getHorarioRio() {
    var now = new Date();
    var options = { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit', hour12: false };
    var parts = new Intl.DateTimeFormat('pt-BR', options).formatToParts(now);
    var h = parts.find(function(p) { return p.type === 'hour'; }).value;
    var m = parts.find(function(p) { return p.type === 'minute'; }).value;
    return { hora: parseInt(h), minuto: parseInt(m) };
}

function falarHorario(hora, minuto) {
    var h = hora;
    var m = minuto;
    var texto = '';
    if (h === 0 && m === 0) { texto = 'meia noite e zero minutos'; }
    else if (h === 12 && m === 0) { texto = 'meio dia e zero minutos'; }
    else {
        var hPorExtenso = ['zero','uma','duas','tres','quatro','cinco','seis','sete','oito','nove','dez','onze','doze','treze','quatorze','quinze','dezesseis','dezessete','dezoito','dezenove','vinte','vinte e uma','vinte e duas','vinte e tres'];
        texto = hPorExtenso[h] || h;
        texto += ' hora' + (h !== 1 ? 's' : '');
        if (m > 0) {
            var mPorExtenso = ['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove','dez','onze','doze','treze','quatorze','quinze','dezesseis','dezessete','dezoito','dezenove','vinte','vinte e um','vinte e dois','vinte e tres','vinte e quatro','vinte e cinco','vinte e seis','vinte e sete','vinte e oito','vinte e nove','trinta','trinta e um','trinta e dois','trinta e tres','trinta e quatro','trinta e cinco','trinta e seis','trinta e sete','trinta e oito','trinta e nove','quarenta','quarenta e um','quarenta e dois','quarenta e tres','quarenta e quatro','quarenta e cinco','quarenta e seis','quarenta e sete','quarenta e oito','quarenta e nove','cinquenta','cinquenta e um','cinquenta e dois','cinquenta e tres','cinquenta e quatro','cinquenta e cinco'];
            texto += ' e ' + (mPorExtenso[m] || m) + ' minuto' + (m !== 1 ? 's' : '');
        }
    }
    return texto;
}

function pickLocucao() {
    var tipos = Object.keys(locucoesArquivos);
    var tipo;
    do { tipo = tipos[Math.floor(Math.random() * tipos.length)]; } while (tipo === lastLocucaoType && tipos.length > 1);
    lastLocucaoType = tipo;
    var arquivos = locucoesArquivos[tipo];
    return { tipo: tipo, arquivo: arquivos[Math.floor(Math.random() * arquivos.length)] };
}

function playAudio(url) {
    return new Promise(function(resolve, reject) {
        var a = new Audio();
        a.preload = 'auto';
        a.onended = function() { resolve(); };
        a.onerror = function() { reject(); };
        a.src = url;
        a.load();
        a.play().catch(reject);
    });
}

var voicesLoaded = false;
if ('speechSynthesis' in window) {
    if (speechSynthesis.getVoices().length) { voicesLoaded = true; }
    speechSynthesis.addEventListener('voiceschanged', function() { voicesLoaded = true; });
    if (!voicesLoaded) setTimeout(function() { speechSynthesis.getVoices(); voicesLoaded = true; }, 1000);
}

function falarComVoz(texto) {
    return new Promise(function(resolve) {
        if (!('speechSynthesis' in window)) { resolve(); return; }
        window.speechSynthesis.cancel();
        var u = new SpeechSynthesisUtterance(texto);
        u.lang = 'pt-BR';
        u.rate = 0.95;
        u.pitch = 1.0;
        u.volume = 1.0;
        if (voicesLoaded) {
            var voices = window.speechSynthesis.getVoices();
            var ptBr = voices.find(function(v) { return v.lang === 'pt-BR' && v.name.indexOf('Google') === -1; }) || voices.find(function(v) { return v.lang === 'pt-BR'; });
            if (ptBr) u.voice = ptBr;
        }
        u.onend = function() { setTimeout(resolve, 200); };
        u.onerror = function() { resolve(); };
        window.speechSynthesis.speak(u);
    });
}

function doHoraCerta(callback) {
    if (isAnnouncing) { if (callback) callback(); return; }
    isAnnouncing = true;
    var np = document.getElementById('nowPlaying');
    var ss = document.getElementById('streamStatus');

    try { savedVolume = audio.volume; audio.volume = 0.03; } catch(e) {}
    if (np) np.classList.add('announcing');
    document.getElementById('trackName').textContent = 'Hora Certa - Rio de Janeiro';
    document.getElementById('trackArtist').textContent = 'Pires FM - A hora certa do Rio!';
    if (ss) { ss.innerHTML = '<i class="fas fa-clock"></i> <span>Hora Certa - Pires FM</span>'; ss.className = 'stream-status connected'; }
    renderPlaylist();

    var introFile = horaIntros[Math.floor(Math.random() * horaIntros.length)];
    var outroFile = horaOutros[Math.floor(Math.random() * horaOutros.length)];
    var introUrl = LOCUCOES_URL + '/' + encodeURIComponent(introFile);
    var outroUrl = LOCUCOES_URL + '/' + encodeURIComponent(outroFile);
    var horario = getHorarioRio();
    var horaFile = 'hora_' + String(horario.hora).padStart(2, '0') + '_' + String(horario.minuto).padStart(2, '0') + '.mp3';
    var horaUrl = LOCUCOES_URL + '/' + encodeURIComponent(horaFile);

    playAudio(introUrl)
        .then(function() { return playAudio(horaUrl); })
        .then(function() { return playAudio(outroUrl); })
        .then(function() {
            isAnnouncing = false; locucaoAudio = null;
            if (np) np.classList.remove('announcing');
            try { audio.volume = savedVolume; } catch(e) {}
            renderPlaylist();
            setTimeout(function() { if (callback) callback(); }, 500);
        })
        .catch(function() {
            isAnnouncing = false; locucaoAudio = null;
            if (np) np.classList.remove('announcing');
            try { audio.volume = savedVolume; } catch(e) {}
            renderPlaylist();
            if (callback) callback();
        });
}

// ========== CLIMA E NOTICIAS AO VIVO ==========
var weatherCache = null;
var weatherCacheTime = 0;
var weatherCacheDuracao = 600000;

var condicoesPT = {
    0: 'céu limpo', 1: 'céu quase limpo', 2: 'parcialmente nublado', 3: 'nublado',
    45: 'neblina', 48: 'neblina com geada', 51: 'garoa leve', 53: 'garoa moderada',
    55: 'garoa forte', 56: 'garoa gelada leve', 57: 'garoa gelada forte',
    61: 'chuva leve', 63: 'chuva moderada', 65: 'chuva forte',
    66: 'chuva gelada leve', 67: 'chuva gelada forte',
    71: 'neve leve', 73: 'neve moderada', 75: 'neve forte', 77: 'granizo',
    80: 'pancadas leves', 81: 'pancadas moderadas', 82: 'pancadas fortes',
    85: 'pancadas de neve leves', 86: 'pancadas de neve fortes',
    95: 'tempestade', 96: 'tempestade com granizo leve', 99: 'tempestade com granizo forte'
};

function buscarClima() {
    var agora = Date.now();
    if (weatherCache && (agora - weatherCacheTime) < weatherCacheDuracao) {
        return Promise.resolve(weatherCache);
    }
    return fetch('https://api.open-meteo.com/v1/forecast?latitude=-22.9068&longitude=-43.1729&current_weather=true&timezone=America/Sao_Paulo')
        .then(function(r) { return r.json(); })
        .then(function(data) {
            var cw = data.currentweather || data.current_weather;
            var temp = cw.temperature;
            var code = cw.weathercode || cw.weather_code;
            var condicao = condicoesPT[code] || 'condições variáveis';
            var vento = cw.windspeed;
            var resultado = { temp: temp, condicao: condicao, vento: vento };
            weatherCache = resultado;
            weatherCacheTime = agora;
            return resultado;
        })
        .catch(function() { return null; });
}

function textosClima(c) {
    var frases = [
        'O tempo no Rio de Janeiro agora: ' + c.temp + ' graus, ' + c.condicao + ', com vento de ' + c.vento + ' quilometros por hora.',
        'No Rio de Janeiro, sao ' + c.temp + ' graus. Tempo ' + c.condicao + '. Vento a ' + c.vento + ' km por hora.',
        'Para quem esta no Rio: ' + c.temp + ' graus, ' + c.condicao + '. Vento de ' + c.vento + ' quilometros por hora.',
        'Informacoes do clima do Rio de Janeiro: temperatura de ' + c.temp + ' graus, ' + c.condicao + '.',
        'O Rio de Janeiro esta com ' + c.temp + ' graus e ' + c.condicao + '. Vento a ' + c.vento + ' kmh.'
    ];
    return frases[Math.floor(Math.random() * frases.length)];
}

function doClima(callback) {
    if (isAnnouncing) { if (callback) callback(); return; }
    isAnnouncing = true;
    var np = document.getElementById('nowPlaying');
    var ss = document.getElementById('streamStatus');

    try { savedVolume = audio.volume; audio.volume = 0.03; } catch(e) {}
    if (np) np.classList.add('announcing');
    document.getElementById('trackName').textContent = 'Tempo no Rio de Janeiro';
    document.getElementById('trackArtist').textContent = 'Pires FM - Informacoes do tempo...';
    if (ss) { ss.innerHTML = '<i class="fas fa-cloud-sun"></i> <span>Clima - Pires FM</span>'; ss.className = 'stream-status connected'; }
    renderPlaylist();

    var intros = ['Agora na Pires FM, o tempo no Rio de Janeiro!', 'Informacoes do tempo, aqui na Pires FM!', 'Vamos ao clima do Rio de Janeiro!', 'Pires FM traz o tempo para voce!', 'No ar, as informacoes do tempo no Rio!'];
    var outros = ['Pires FM, a voz do Rio de Janeiro!', 'Fique ligado na Pires FM!', 'Continuamos com a melhor musica!', 'Pires FM, sempre com voce!'];
    var introFile = 'hora_intro_' + String(Math.floor(Math.random() * 5) + 1).padStart(2, '0') + '.mp3';
    var outroFile = 'hora_outro_' + String(Math.floor(Math.random() * 5) + 1).padStart(2, '0') + '.mp3';
    var introUrl = LOCUCOES_URL + '/' + encodeURIComponent(introFile);
    var outroUrl = LOCUCOES_URL + '/' + encodeURIComponent(outroFile);

    buscarClima().then(function(c) {
        if (!c) { isAnnouncing = false; if (np) np.classList.remove('announcing'); try { audio.volume = savedVolume; } catch(e) {} renderPlaylist(); if (callback) callback(); return; }
        var textoClima = textosClima(c);
        playAudio(introUrl)
            .then(function() { return falarComVoz(textoClima); })
            .then(function() { return playAudio(outroUrl); })
            .then(function() {
                isAnnouncing = false; locucaoAudio = null;
                if (np) np.classList.remove('announcing');
                try { audio.volume = savedVolume; } catch(e) {}
                renderPlaylist();
                setTimeout(function() { if (callback) callback(); }, 500);
            })
            .catch(function() {
                isAnnouncing = false; locucaoAudio = null;
                if (np) np.classList.remove('announcing');
                try { audio.volume = savedVolume; } catch(e) {}
                renderPlaylist();
                if (callback) callback();
            });
    });
}

// ========== NOTICIAS REAIS (RSS) ==========
var newsCache = null;
var newsCacheTime = 0;
var newsCacheDuracao = 900000;

function buscarNoticias() {
    var agora = Date.now();
    if (newsCache && (agora - newsCacheTime) < newsCacheDuracao) {
        return Promise.resolve(newsCache);
    }
    var rssUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https://news.google.com/rss/search?q=Rio+de+Janeiro&hl=pt-BR&gl=BR';
    return fetch(rssUrl)
        .then(function(r) { return r.json(); })
        .then(function(data) {
            if (data.items && data.items.length > 0) {
                var noticias = data.items.slice(0, 15).map(function(item) {
                    return { titulo: item.title, desc: item.description ? item.description.replace(/<[^>]*>/g, '').substring(0, 120) : '' };
                });
                newsCache = noticias;
                newsCacheTime = agora;
                return noticias;
            }
            return null;
        })
        .catch(function() { return null; });
}

function doNoticias(callback) {
    if (isAnnouncing) { if (callback) callback(); return; }
    isAnnouncing = true;
    var np = document.getElementById('nowPlaying');
    var ss = document.getElementById('streamStatus');

    try { savedVolume = audio.volume; audio.volume = 0.03; } catch(e) {}
    if (np) np.classList.add('announcing');
    document.getElementById('trackName').textContent = 'Noticias em Tempo Real';
    document.getElementById('trackArtist').textContent = 'Pires FM - Ultimas noticias...';
    if (ss) { ss.innerHTML = '<i class="fas fa-newspaper"></i> <span>Noticias - Pires FM</span>'; ss.className = 'stream-status connected'; }
    renderPlaylist();

    var outroFile = 'hora_outro_' + String(Math.floor(Math.random() * 5) + 1).padStart(2, '0') + '.mp3';
    var outroUrl = LOCUCOES_URL + '/' + encodeURIComponent(outroFile);

    buscarNoticias().then(function(noticias) {
        if (!noticias || noticias.length === 0) { isAnnouncing = false; if (np) np.classList.remove('announcing'); try { audio.volume = savedVolume; } catch(e) {} renderPlaylist(); if (callback) callback(); return; }
        var noticia = noticias[Math.floor(Math.random() * noticias.length)];
        var introTexts = [
            'Noticia de ultima hora, trazida pela Pires FM!',
            'Agora na Pires FM, uma noticia importante!',
            'Informacao importante na Pires FM!',
            'Pires FM traz as ultimas noticias!'
        ];
        var introText = introTexts[Math.floor(Math.random() * introTexts.length)];
        var textoNoticia = introText + ' ' + noticia.titulo + '. ' + noticia.desc;
        falarComVoz(textoNoticia)
            .then(function() { return playAudio(outroUrl); })
            .then(function() {
                isAnnouncing = false; locucaoAudio = null;
                if (np) np.classList.remove('announcing');
                try { audio.volume = savedVolume; } catch(e) {}
                renderPlaylist();
                setTimeout(function() { if (callback) callback(); }, 500);
            })
            .catch(function() {
                isAnnouncing = false; locucaoAudio = null;
                if (np) np.classList.remove('announcing');
                try { audio.volume = savedVolume; } catch(e) {}
                renderPlaylist();
                if (callback) callback();
            });
    });
}

// ========== IDENTIFICACAO DA RADIO ==========
function doIdent(callback) {
    if (isAnnouncing) { if (callback) callback(); return; }
    isAnnouncing = true;
    var np = document.getElementById('nowPlaying');
    var ss = document.getElementById('streamStatus');

    try { savedVolume = audio.volume; audio.volume = 0.03; } catch(e) {}
    if (np) np.classList.add('announcing');
    document.getElementById('trackName').textContent = 'Identificacao Pires FM';
    document.getElementById('trackArtist').textContent = 'Pires FM - A voz do Rio de Janeiro!';
    if (ss) { ss.innerHTML = '<i class="fas fa-broadcast-tower"></i> <span>Pires FM - A voz do Rio!</span>'; ss.className = 'stream-status connected'; }
    renderPlaylist();

    var frases = [
        'Voce esta ouvindo Pires FM, a voz do Rio de Janeiro!',
        'Pires FM, a radio que toca o coracao do Rio!',
        'Aqui e Pires FM, a melhor musica do Rio de Janeiro!',
        'Pires FM, sempre com voce, a voz do Rio!',
        'Voce esta sintonizado na Pires FM, a radio do carioca!',
        'Pires FM, trazendo a melhor musica e informacoes do Rio!',
        'Essa e Pires FM, a radio oficial do Rio de Janeiro!',
        'Pires FM, a voz que conecta o Rio!'
    ];
    var texto = frases[Math.floor(Math.random() * frases.length)];
    var outroFile = 'hora_outro_' + String(Math.floor(Math.random() * 5) + 1).padStart(2, '0') + '.mp3';
    var outroUrl = LOCUCOES_URL + '/' + encodeURIComponent(outroFile);

    falarComVoz(texto)
        .then(function() { return playAudio(outroUrl); })
        .then(function() {
            isAnnouncing = false; locucaoAudio = null;
            if (np) np.classList.remove('announcing');
            try { audio.volume = savedVolume; } catch(e) {}
            renderPlaylist();
            setTimeout(function() { if (callback) callback(); }, 500);
        })
        .catch(function() {
            isAnnouncing = false; locucaoAudio = null;
            if (np) np.classList.remove('announcing');
            try { audio.volume = savedVolume; } catch(e) {}
            renderPlaylist();
            if (callback) callback();
        });
}

function doLocucao(callback) {
    var rand = Math.random();
    if (rand < 0.15) { doHoraCerta(callback); return; }
    if (rand < 0.35) { doClima(callback); return; }
    if (rand < 0.55) { doNoticias(callback); return; }
    if (rand < 0.70) { doIdent(callback); return; }
    if (isAnnouncing) { if (callback) callback(); return; }
    isAnnouncing = true;
    var loc = pickLocucao();
    var url = LOCUCOES_URL + '/' + encodeURIComponent(loc.arquivo);

    locucaoAudio = new Audio();
    locucaoAudio.preload = 'auto';
    var np = document.getElementById('nowPlaying');
    var ss = document.getElementById('streamStatus');

    locucaoAudio.onplay = function() {
        if (np) np.classList.add('announcing');
        var nomes = { ident: 'Identificacao Pires FM', curiosidade: 'Curiosidade do Rio', noticia: 'Noticia do Rio', dica: 'Dica do Dia', programacao: 'Programacao', hora: 'Hora Certa', clima: 'Tempo no Rio', noticias: 'Noticias em Tempo Real' };
        document.getElementById('trackName').textContent = nomes[loc.tipo] || 'Locucao Pires FM';
        document.getElementById('trackArtist').textContent = 'Pires FM - Locucao profissional...';
        if (ss) { ss.innerHTML = '<i class="fas fa-microphone"></i> <span>Locucao - Pires FM</span>'; ss.className = 'stream-status connected'; }
        try { savedVolume = audio.volume; audio.volume = 0.03; } catch(e) {}
        renderPlaylist();
    };

    locucaoAudio.onended = function() {
        isAnnouncing = false; locucaoAudio = null;
        if (np) np.classList.remove('announcing');
        try { audio.volume = savedVolume; } catch(e) {}
        renderPlaylist();
        setTimeout(function() { if (callback) callback(); }, 500);
    };

    locucaoAudio.onerror = function() {
        isAnnouncing = false; locucaoAudio = null;
        if (np) np.classList.remove('announcing');
        try { audio.volume = savedVolume; } catch(e) {}
        renderPlaylist();
        if (callback) callback();
    };

    locucaoAudio.src = url;
    locucaoAudio.load();
    locucaoAudio.play().catch(function() {
        isAnnouncing = false; locucaoAudio = null;
        if (np) np.classList.remove('announcing');
        try { audio.volume = savedVolume; } catch(e) {}
        renderPlaylist();
        if (callback) callback();
    });
}

function doBlocoLocucao(callback) {
    if (isAnnouncing) { if (callback) callback(); return; }
    isAnnouncing = true;
    var np = document.getElementById('nowPlaying');
    var ss = document.getElementById('streamStatus');
    var volOriginal = audio.volume;
    try { audio.volume = 0.03; } catch(e) {}
    if (np) np.classList.add('announcing');
    document.getElementById('trackName').textContent = 'Pires FM - Informacao e Musica';
    document.getElementById('trackArtist').textContent = 'Pires FM - Bloco de Programacao';
    if (ss) { ss.innerHTML = '<i class="fas fa-microphone"></i> <span>Bloco - Pires FM</span>'; ss.className = 'stream-status connected'; }
    renderPlaylist();
    function stepHora() {
        isAnnouncing = false;
        doHoraCerta(function() {
            isAnnouncing = false;
            stepClima();
        });
    }
    function stepClima() {
        doClima(function() {
            isAnnouncing = false;
            stepNoticia();
        });
    }
    function stepNoticia() {
        doNoticias(function() {
            isAnnouncing = false;
            stepExtra();
        });
    }
    function stepExtra() {
        var loc = pickLocucao();
        var url = LOCUCOES_URL + '/' + encodeURIComponent(loc.arquivo);
        playAudio(url).then(function() {
            isAnnouncing = false; locucaoAudio = null;
            if (np) np.classList.remove('announcing');
            try { audio.volume = volOriginal; } catch(e) {}
            renderPlaylist();
            setTimeout(function() { if (callback) callback(); }, 500);
        }).catch(function() {
            isAnnouncing = false; locucaoAudio = null;
            if (np) np.classList.remove('announcing');
            try { audio.volume = volOriginal; } catch(e) {}
            renderPlaylist();
            if (callback) callback();
        });
    }
    stepHora();
}

// ========== PLAYER ==========
var audio = document.getElementById('radioAudio') || new Audio();
audio.id = 'radioAudio';
audio.preload = 'auto';

// Track preloader (Blob cache for instant loading)
var trackCache = {};
var TRACK_CACHE_MAX = 4;
function preloadTrack(idx) {
    idx = ((idx % playlist.length) + playlist.length) % playlist.length;
    if (trackCache[idx]) return;
    var track = playlist[idx];
    if (!track) return;
    var url = ARCHIVE_ITEM + '/' + encodeURIComponent(track.file);
    fetch(url).then(function(r) { return r.blob(); }).then(function(blob) {
        trackCache[idx] = URL.createObjectURL(blob);
        // Clean old cache entries
        var keys = Object.keys(trackCache);
        while (keys.length > TRACK_CACHE_MAX) {
            var old = keys.shift();
            URL.revokeObjectURL(trackCache[old]);
            delete trackCache[old];
        }
    }).catch(function(){});
}
function clearTrackCache() {
    for (var k in trackCache) { URL.revokeObjectURL(trackCache[k]); delete trackCache[k]; }
}

var isPlaying = false;
var currentTrackIndex = 0;
var errorRetryCount = 0;
var MAX_RETRIES = 3;
var maxDurationTimer = null;

var playBtn = document.getElementById('playBtn');
var playIcon = document.getElementById('playIcon');
var volumeSlider = document.getElementById('volumeSlider');
var volumeValue = document.getElementById('volumeValue');
var volumeIcon = document.getElementById('volumeIcon');
var streamStatus = document.getElementById('streamStatus');
var visualizerEl = document.getElementById('visualizer');
var vinylEl = document.getElementById('vinyl');
var trackNameEl = document.getElementById('trackName');
var trackArtistEl = document.getElementById('trackArtist');
var progressContainer = document.getElementById('progressContainer');
var progressBar = document.getElementById('progressBar');
var playlistBody = document.getElementById('playlistBody');

audio.volume = (volumeSlider ? volumeSlider.value : 80) / 100;

// ========== MSE PSEUDO-STREAM ==========
var USE_MSE = false;
var mseMediaSource = null;
var mseSourceBuffer = null;
var mseReady = false;
var mseAppendQueue = [];
var mseProcessing = false;
var mseStartTime = 0;
var mseStartIndex = 0;

function initMSE(callback) {
    if (!('MediaSource' in window)) { if (callback) callback(false); return; }
    try { if (!MediaSource.isTypeSupported('audio/mpeg')) { if (callback) callback(false); return; } } catch(e) { if (callback) callback(false); return; }
    USE_MSE = true;
    mseMediaSource = new MediaSource();
    audio.src = URL.createObjectURL(mseMediaSource);
    audio.load();
    mseMediaSource.addEventListener('sourceopen', function() {
        try { mseSourceBuffer = mseMediaSource.addSourceBuffer('audio/mpeg'); } catch(e) { USE_MSE = false; mseReady = false; if (callback) callback(false); return; }
        mseReady = true;
        mseSourceBuffer.onerror = function() { };
        mseSourceBuffer.onupdateend = function() { mseProcessing = false; processMSEQueue(); };
        if (callback) callback(true);
    });
    setTimeout(function() {
        if (!mseReady) { USE_MSE = false; if (callback) callback(false); }
    }, 1000);
}

function processMSEQueue() {
    if (!mseReady || !mseSourceBuffer || mseSourceBuffer.updating || mseProcessing) return;
    if (mseAppendQueue.length === 0) return;
    mseProcessing = true;
    var data = mseAppendQueue.shift();
    try { mseSourceBuffer.appendBuffer(data); } catch(e) { mseProcessing = false; }
}

function appendMSE(trackIndex) {
    if (!USE_MSE) return;
    var idx = ((trackIndex % playlist.length) + playlist.length) % playlist.length;
    var track = playlist[idx];
    if (!track) return;
    var url = trackCache[idx] || (ARCHIVE_ITEM + '/' + encodeURIComponent(track.file));
    fetch(url).then(function(r) { if (!r.ok) throw Error(); return r.arrayBuffer(); }).then(function(buf) {
        mseAppendQueue.push(buf);
        processMSEQueue();
    }).catch(function(){});
}

function renderPlaylist() {
    if (!playlistBody) return;
    var html = '';
    for (var i = 0; i < playlist.length; i++) {
        var track = playlist[i];
        var isCurrent = i === currentTrackIndex;
        var locClass = isCurrent && isAnnouncing ? ' announcing' : '';
        html += '<tr class="playlist-row ' + (isCurrent ? 'current' : '') + locClass + '" data-index="' + i + '">' +
            '<td class="pl-number">' + (isCurrent && isPlaying ? '<i class="fas fa-volume-up pulse-icon"></i>' : (isCurrent && isAnnouncing ? '<i class="fas fa-microphone pulse-icon"></i>' : (i + 1))) + '</td>' +
            '<td class="pl-info"><span class="pl-song">' + track.song + '</span><span class="pl-artist">' + track.artist + '</span></td>' +
            '<td class="pl-duration"></td></tr>';
    }
    playlistBody.innerHTML = html;
    var rows = playlistBody.querySelectorAll('.playlist-row');
    for (var r = 0; r < rows.length; r++) {
        rows[r].addEventListener('click', function() {
            currentTrackIndex = parseInt(this.dataset.index);
            songsPlayed = 0;
            loadTrack();
        });
    }
    scrollToCurrent();
}

function scrollToCurrent() {
    var currentRow = playlistBody.querySelector('.playlist-row.current');
    if (currentRow) {
        currentRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

var loadingTrack = false;
var trackEnding = false;
var healthCheckInterval = null;
var consecutiveFailures = 0;

function loadTrack() {
    goNextBusy = false;
    trackEnding = false;
    if (loadingTrack) return;
    loadingTrack = true;
    if (currentTrackIndex < 0 || currentTrackIndex >= playlist.length) currentTrackIndex = 0;
    var track = playlist[currentTrackIndex];

    if (maxDurationTimer) { clearTimeout(maxDurationTimer); maxDurationTimer = null; }

    if (USE_MSE && mseReady) {
        errorRetryCount = 0;
        consecutiveFailures = 0;
        setPlayingState(true);
        trackNameEl.textContent = track.song;
        trackArtistEl.textContent = track.artist;
        renderPlaylist();
        loadingTrack = false;
        mseStartTime = audio.currentTime || 0;
        mseStartIndex = currentTrackIndex;
        appendMSE(currentTrackIndex);
        for (var pi = 1; pi <= 7; pi++) appendMSE(currentTrackIndex + pi);
        audio.play().catch(function() {});
        maxDurationTimer = setTimeout(function() {
            if (isPlaying && !isAnnouncing && !trackEnding) goNext();
        }, AVG_SONG * 1000);
        return;
    }

    var url = trackCache[currentTrackIndex] || (ARCHIVE_ITEM + '/' + encodeURIComponent(track.file));

    audio.muted = false;
    audio.volume = (volumeSlider ? volumeSlider.value : 80) / 100;
    audio.preload = 'auto';

    function onReady() {
        audio.removeEventListener('canplay', onReady);
        errorRetryCount = 0;
        consecutiveFailures = 0;
        setPlayingState(true);
        trackNameEl.textContent = track.song;
        trackArtistEl.textContent = track.artist;
        renderPlaylist();
        var seekTo = getRadioTrackOffset();
        if (seekTo > 0 && seekTo < audio.duration) {
            audio.currentTime = seekTo;
        }
        var remaining = AVG_SONG;
        if (seekTo > 0 && seekTo < audio.duration) {
            remaining = AVG_SONG - seekTo;
        }
        var dur = audio.duration;
        var timeout = Math.max(remaining, 10) + 10;
        if (dur && isFinite(dur) && dur < 600 && Math.ceil(dur) + 10 < timeout) {
            timeout = Math.ceil(dur) + 10;
        }
        audio.play().catch(function() {
            setTimeout(function() { audio.play().catch(function() {}); }, 500);
        });
        maxDurationTimer = setTimeout(function() {
            if (isPlaying && !isAnnouncing && !trackEnding) {
                goNext();
            }
        }, timeout * 1000);
        loadingTrack = false;
        // Preload next tracks into Blob cache
        for (var pi = 1; pi <= 3; pi++) {
            preloadTrack(currentTrackIndex + pi);
        }
    }

    audio.addEventListener('canplay', onReady, { once: true });
    audio.src = url;
    audio.onerror = function() {
        audio.onerror = null;
        errorRetryCount++;
        consecutiveFailures++;
        if (consecutiveFailures > 6) {
            consecutiveFailures = 0;
            errorRetryCount = 0;
            streamStatus.innerHTML = '<i class="fas fa-sync"></i> <span>Reiniciando radio...</span>';
            streamStatus.className = 'stream-status';
            setTimeout(function() { startRadio(); }, 3000);
            return;
        }
        if (errorRetryCount < MAX_RETRIES) {
            streamStatus.innerHTML = '<i class="fas fa-redo"></i> <span>Reconectando... (' + errorRetryCount + ')</span>';
            streamStatus.className = 'stream-status error';
            setTimeout(function() { loadTrack(); }, 2000);
        } else {
            errorRetryCount = 0;
            goNext();
        }
    };
    audio.onended = function() {
        audio.onended = null;
        if (!isAnnouncing) goNext();
    };

    streamStatus.innerHTML = '<i class="fas fa-cloud"></i> <span>Carregando...</span>';
    streamStatus.className = 'stream-status';
}

function startHealthCheck() {
    if (healthCheckInterval) clearInterval(healthCheckInterval);
    if (USE_MSE) return;
    healthCheckInterval = setInterval(function() {
        if (!isPlaying || isAnnouncing) return;
        if (audio.ended || (audio.duration && audio.currentTime >= audio.duration - 0.8)) {
            if (!trackEnding) {
                trackEnding = true;
                goNext();
            }
        }
    }, 2000);
}

var goNextBusy = false;
function goNext() {
    if (goNextBusy) return;
    goNextBusy = true;
    if (maxDurationTimer) { clearTimeout(maxDurationTimer); maxDurationTimer = null; }
    if (isAnnouncing && locucaoAudio) { locucaoAudio.pause(); locucaoAudio = null; isAnnouncing = false; }
    songsPlayed++;

    if (USE_MSE && mseReady) {
        currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
        var trk = playlist[currentTrackIndex];
        goNextBusy = false;
        trackNameEl.textContent = trk.song;
        trackArtistEl.textContent = trk.artist;
        renderPlaylist();
        appendMSE(currentTrackIndex + 5);
        appendMSE(currentTrackIndex + 6);
        if (songsPlayed >= 3) {
            songsPlayed = 0;
            doBlocoLocucao(function() {
                setPlayingState(true);
                maxDurationTimer = setTimeout(function() {
                    if (isPlaying && !isAnnouncing && !trackEnding) goNext();
                }, AVG_SONG * 1000);
            });
        } else {
            maxDurationTimer = setTimeout(function() {
                if (isPlaying && !isAnnouncing && !trackEnding) goNext();
            }, AVG_SONG * 1000);
        }
        return;
    }

    if (songsPlayed >= 3) {
        songsPlayed = 0;
        doBlocoLocucao(function() {
            currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
            loadTrack();
        });
    } else {
        currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
        loadTrack();
    }
}

function setPlayingState(playing) {
    isPlaying = playing;
    if (playing) {
        playIcon.className = 'fas fa-pause';
        playBtn.classList.add('playing');
        streamStatus.innerHTML = '<i class="fas fa-wifi"></i> <span>Tocando agora - Pires FM</span>';
        streamStatus.className = 'stream-status connected';
        if (visualizerEl) visualizerEl.classList.add('active');
        if (vinylEl) vinylEl.classList.add('spinning');
    } else {
        playIcon.className = 'fas fa-play';
        playBtn.classList.remove('playing');
        streamStatus.innerHTML = '<i class="fas fa-wifi"></i> <span>Pausado - Clique para continuar</span>';
        streamStatus.className = 'stream-status';
        if (visualizerEl) visualizerEl.classList.remove('active');
        if (vinylEl) vinylEl.classList.remove('spinning');
        var bars = document.querySelectorAll('.visualizer .bar');
        for (var i = 0; i < bars.length; i++) bars[i].style.height = '5px';
    }
    renderPlaylist();
}

// ========== EVENTS ==========
if (playBtn) {
    playBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        if (isAnnouncing && locucaoAudio) {
            var np = document.getElementById('nowPlaying');
            if (np) np.classList.remove('announcing');
        }

        if (isPlaying) {
            audio.muted = true;
            setPlayingState(false);
            return;
        }

        audio.muted = false;
        setPlayingState(true);
    });
}

audio.addEventListener('timeupdate', function() {
    if (USE_MSE && mseReady && isPlaying && mseStartTime > 0) {
        var totalElapsed = audio.currentTime - mseStartTime;
        if (totalElapsed < 0) totalElapsed = 0;
        var trackNum = Math.floor(totalElapsed / AVG_SONG);
        var newIndex = (mseStartIndex + trackNum) % playlist.length;
        if (newIndex !== currentTrackIndex) {
            currentTrackIndex = newIndex;
            var t = playlist[currentTrackIndex];
            trackNameEl.textContent = t.song;
            trackArtistEl.textContent = t.artist;
            renderPlaylist();
        }
    }
    if (audio.duration && isFinite(audio.duration) && progressBar) {
        progressBar.style.width = (audio.currentTime / audio.duration * 100) + '%';
    }
});

if (progressContainer) {
    progressContainer.addEventListener('click', function(e) {
        if (audio.duration && isFinite(audio.duration)) {
            var rect = progressContainer.getBoundingClientRect();
            audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
        }
    });
}

if (volumeSlider) {
    volumeSlider.addEventListener('input', function(e) {
        var v = e.target.value;
        audio.volume = v / 100;
        volumeValue.textContent = v + '%';
        volumeIcon.className = v == 0 ? 'fas fa-volume-mute' : v < 50 ? 'fas fa-volume-down' : 'fas fa-volume-up';
    });
}

if (volumeIcon) {
    volumeIcon.addEventListener('click', function() {
        if (audio.volume > 0) {
            audio.dataset.pv = volumeSlider.value;
            volumeSlider.value = 0; audio.volume = 0;
            volumeValue.textContent = '0%'; volumeIcon.className = 'fas fa-volume-mute';
        } else {
            var p = audio.dataset.pv || 80;
            volumeSlider.value = p; audio.volume = p / 100;
            volumeValue.textContent = p + '%';
            volumeIcon.className = p < 50 ? 'fas fa-volume-down' : 'fas fa-volume-up';
        }
    });
}

(function animVis() {
    if (isPlaying && !isAnnouncing) {
        var bars = document.querySelectorAll('.visualizer .bar');
        for (var i = 0; i < bars.length; i++) bars[i].style.height = (Math.random() * 50 + 5) + 'px';
    }
    requestAnimationFrame(function() { setTimeout(animVis, 100); });
})();

var menuToggle = document.getElementById('menuToggle');
var mobileNav = document.getElementById('mobileNav');
if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });
    var mobileLinks = document.querySelectorAll('.mobile-link');
    for (var i = 0; i < mobileLinks.length; i++) {
        mobileLinks[i].addEventListener('click', function() {
            menuToggle.classList.remove('active');
            mobileNav.classList.remove('active');
        });
    }
}

window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    if (header) header.classList.toggle('scrolled', window.scrollY > 50);
    var sp = window.scrollY + 100;
    var secs = document.querySelectorAll('section[id]');
    for (var i = 0; i < secs.length; i++) {
        var s = secs[i];
        if (sp >= s.offsetTop && sp < s.offsetTop + s.offsetHeight) {
            var links = document.querySelectorAll('.nav-link');
            for (var j = 0; j < links.length; j++) links[j].classList.remove('active');
            var link = document.querySelector('.nav-link[href="#' + s.id + '"]');
            if (link) link.classList.add('active');
        }
    }
});

document.addEventListener('keydown', function(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || !playBtn) return;
    if (e.code === 'Space') { e.preventDefault(); playBtn.click(); }
});

renderPlaylist();

// ========== SONG REQUESTS ==========
var REQUESTS_KEY = 'piresfm_requests';
var REQUESTS_PUBLIC_KEY = 'piresfm_requests_public';

function getRequests() {
    try { return JSON.parse(localStorage.getItem(REQUESTS_KEY)) || []; } catch(e) { return []; }
}

function saveRequests(reqs) {
    try { localStorage.setItem(REQUESTS_KEY, JSON.stringify(reqs)); } catch(e) {}
    var publicReqs = reqs.filter(function(r) { return r.approved; }).slice(-5);
    try { localStorage.setItem(REQUESTS_PUBLIC_KEY, JSON.stringify(publicReqs)); } catch(e) {}
    updateRequestCounts();
}

function updateRequestCounts() {
    var reqs = getRequests();
    var totalEl = document.getElementById('reqCountTotal');
    var playedEl = document.getElementById('reqCountPlayed');
    if (totalEl) totalEl.textContent = reqs.length;
    if (playedEl) playedEl.textContent = reqs.filter(function(r) { return r.played; }).length;
    renderRequestQueue();
}

function renderRequestQueue() {
    var container = document.getElementById('requestList');
    var queue = document.getElementById('requestQueue');
    if (!container) return;
    var publicReqs = [];
    try { publicReqs = JSON.parse(localStorage.getItem(REQUESTS_PUBLIC_KEY)) || []; } catch(e) {}
    if (publicReqs.length === 0) { queue.style.display = 'none'; return; }
    queue.style.display = 'block';
    var html = '';
    for (var i = 0; i < publicReqs.length; i++) {
        var r = publicReqs[i];
        html += '<div class="request-item">' +
            '<div class="req-song">' + escHtml(r.song) + '</div>' +
            '<div class="req-artist">' + escHtml(r.artist) + ' <span class="req-by">por ' + escHtml(r.name) + '</span></div>' +
            (r.message ? '<div class="req-msg">"' + escHtml(r.message) + '"</div>' : '') +
            '</div>';
    }
    container.innerHTML = html;
}

var reqForm = document.getElementById('requestForm');
if (reqForm) {
    reqForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var name = document.getElementById('reqName').value.trim();
        var song = document.getElementById('reqSong').value.trim();
        var artist = document.getElementById('reqArtist').value.trim();
        var message = document.getElementById('reqMessage').value.trim();
        if (!name || !song || !artist) { alert('Preencha nome, música e artista!'); return; }
        var reqs = getRequests();
        reqs.push({
            id: Date.now(),
            name: name,
            song: song,
            artist: artist,
            message: message,
            date: new Date().toLocaleString('pt-BR'),
            played: false,
            approved: false
        });
        saveRequests(reqs);
        reqForm.reset();
        alert('Pedido enviado com sucesso! Obrigado por participar da Pires FM.');
    });
}

// AUTOPLAY
var autoplayOverlay = document.getElementById('autoplayOverlay');
var autoplayBtn = document.getElementById('autoplayBtn');

function startRadio() {
    if (autoplayOverlay) autoplayOverlay.classList.add('hidden');
    clearTrackCache();
    currentTrackIndex = getRadioTrackIndex();
    var tic = getElapsedSeconds() % CYCLE_DURATION;
    var sic = Math.floor(tic / AVG_SONG);
    songsPlayed = (sic >= SONGS_PER_BLOCO ? 0 : sic);
    for (var pi = 1; pi <= TRACK_CACHE_MAX; pi++) {
        preloadTrack(currentTrackIndex + pi);
    }
    initMSE(function(ok) {
        if (ok) {
            loadTrack();
            startHealthCheck();
        } else {
            USE_MSE = false;
            audio.src = '';
            audio.load();
            setTimeout(function() { loadTrack(); startHealthCheck(); }, 100);
        }
    });
}

// Mobile recovery: when screen turns back on, resume playback
document.addEventListener('visibilitychange', function() {
    if (document.hidden) return;
    if (!isPlaying || isAnnouncing) return;
    if (USE_MSE && mseReady) {
        if (audio.paused) audio.play().catch(function() {});
        return;
    }
    if (audio.ended || (audio.duration && audio.currentTime >= audio.duration - 0.8)) {
        goNext();
    } else if (audio.paused && !audio.ended) {
        audio.play().catch(function() {
            var nextCached = trackCache[(currentTrackIndex + 1) % playlist.length] || trackCache[currentTrackIndex];
            if (nextCached) {
                audio.src = nextCached;
                audio.play().catch(function() { loadTrack(); });
            } else {
                loadTrack();
            }
        });
    }
});

console.log('%c Pires FM %c Iniciando...',
    'background:#e63946;color:white;padding:5px 10px;border-radius:4px 0 0 4px;font-weight:bold',
    'background:#1d3557;color:white;padding:5px 10px;border-radius:0 4px 4px 0');

loadPlaylist(function() {
    renderPlaylist();
    updateRequestCounts();
    if (autoplayBtn) {
        autoplayBtn.addEventListener('click', function(e) {
            e.preventDefault();
            startRadio();
        });
    }
    console.log('%c Pires FM %c ' + playlist.length + ' musicas - RADIO TEMPO REAL ',
        'background:#e63946;color:white;padding:5px 10px;border-radius:4px 0 0 4px;font-weight:bold',
        'background:#1d3557;color:white;padding:5px 10px;border-radius:0 4px 4px 0');
});

// ========== CHAT PIRES FM ==========
var chatInitialized = false;
var chatUser = null;
var chatUnsub = null;
var chatLastMsg = 0;

var chatColors = ['#e63946','#457b9d','#2a9d8f','#e9c46a','#f4a261','#a855f7','#06b6d4','#f97316','#84cc16','#ec4899','#14b8a6','#f43f5e'];

function getChatNick() {
    try { return localStorage.getItem('piresfm_chat_nick') || ''; } catch(e) { return ''; }
}

function toggleChat() {
    var box = document.getElementById('chatBox');
    var fab = document.getElementById('chatFab');
    if (!box || !fab) return;
    var open = box.classList.toggle('open');
    fab.style.display = open ? 'none' : 'flex';
    if (open) {
        document.getElementById('chatInput').focus();
        if (!chatInitialized) initChat();
    } else {
        if (chatUnsub) { chatUnsub(); chatUnsub = null; }
    }
}

function setNickname() {
    var input = document.getElementById('chatNickInput');
    var nick = input.value.trim();
    if (!nick) return;
    try { localStorage.setItem('piresfm_chat_nick', nick); } catch(e) {}
    input.blur();
}

function sendChat() {
    if (!chatInitialized || !chatUser) return;
    if (Date.now() - chatLastMsg < 3000) return;
    var input = document.getElementById('chatInput');
    var text = input.value.trim();
    if (!text) return;
    chatLastMsg = Date.now();
    input.value = '';
    var nick = getChatNick() || 'Ouvinte';
    firebase.firestore().collection('chat').add({
        text: text,
        nick: nick,
        uid: chatUser.uid,
        time: firebase.firestore.FieldValue.serverTimestamp()
    }).catch(function(){});
}

function initChat() {
    if (chatInitialized) return;
    chatInitialized = true;
    var nick = getChatNick();
    if (nick) {
        var ni = document.getElementById('chatNickInput');
        if (ni) ni.value = nick;
    }
    firebase.auth().signInAnonymously().then(function(result) {
        chatUser = result.user;
        var msgs = document.getElementById('chatMessages');
        chatUnsub = firebase.firestore().collection('chat')
            .orderBy('time', 'asc')
            .limit(50)
            .onSnapshot(function(snapshot) {
                if (!msgs) return;
                var autoScroll = msgs.scrollTop + msgs.clientHeight >= msgs.scrollHeight - 30;
                msgs.innerHTML = '<div class="chat-welcome">Bem-vindo ao chat da Pires FM! \uD83C\uDFB5</div>';
                snapshot.forEach(function(doc) {
                    var d = doc.data();
                    if (!d.text) return;
                    var div = document.createElement('div');
                    div.className = 'chat-msg';
                    var color = chatColors[Math.abs(hashCode(d.uid || '')) % chatColors.length];
                    div.innerHTML = '<span class="chat-msg-nick" style="color:' + color + '">' + escHtml(d.nick || 'Ouvinte') + '</span> <span class="chat-msg-text">' + escHtml(d.text) + '</span>';
                    msgs.appendChild(div);
                });
                if (autoScroll) msgs.scrollTop = msgs.scrollHeight;
            });
    }).catch(function(){});
}

function hashCode(s) {
    var h = 0;
    for (var i = 0; i < s.length; i++) { h = ((h << 5) - h) + s.charCodeAt(i); h |= 0; }
    return h;
}

function escHtml(s) {
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        var chatInput = document.getElementById('chatInput');
        if (chatInput && document.activeElement === chatInput) { sendChat(); return; }
        var nickInput = document.getElementById('chatNickInput');
        if (nickInput && document.activeElement === nickInput) { setNickname(); return; }
    }
});
