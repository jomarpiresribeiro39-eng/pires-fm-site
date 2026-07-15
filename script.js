// ================================================================
//  Pires FM - Configuracao
//  MODE = "local"   -> toca musicas do computador (teste)
//  MODE = "cloud"   -> toca do Internet Archive (24/7 gratis)
//  MODE = "remote"  -> toca do seu Icecast (servidor proprio)
//
//  Se usar MODE="cloud", preencha ARCHIVE_ITEM com o nome do seu
//  item no Internet Archive (ex: "pires-fm-musicas")
// ================================================================
var MODE = "cloud";
var ARCHIVE_ITEM = "pires-fm-musicas";
var STREAM_URL = "";
// ================================================================

// ========== CLOCK - Rio de Janeiro ==========
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
    return new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' })).getHours();
}

function getRioTimeStr() {
    return new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit', hour12: false });
}

// ========== PROGRAMACAO 24/7 ==========
var schedule = [
    { time: "00:00 - 02:00", name: "Madrugada Tranquila", desc: "Suaves e relaxantes para a madrugada", icon: "\u{1F319}" },
    { time: "02:00 - 04:00", name: "Noite Eletronica", desc: "Eletronica e ambient noturno", icon: "\u{1F3A7}" },
    { time: "04:00 - 06:00", name: "Aurora do Amanhecer", desc: "Classicos e suaves ao amanhecer", icon: "\u{1F305}" },
    { time: "06:00 - 08:00", name: "Bom Dia Rio!", desc: "Noticias, clima e boa energia", icon: "\u2600\uFE0F" },
    { time: "08:00 - 10:00", name: "Manha Show", desc: "O melhor da musica brasileira", icon: "\u{1F3B5}" },
    { time: "10:00 - 12:00", name: "Pires Hits", desc: "Os maiores sucessos do momento", icon: "\u{1F525}" },
    { time: "12:00 - 14:00", name: "Almoco Cultural", desc: "MPB, Samba e Pagode na hora do almoco", icon: "\u{1F37D}\uFE0F" },
    { time: "14:00 - 16:00", name: "Tarde de Rock", desc: "Rock nacional e internacional", icon: "\u{1F3B8}" },
    { time: "16:00 - 18:00", name: "Flashback", desc: "Os classicos de todos os tempos", icon: "\u23EA" },
    { time: "18:00 - 20:00", name: "Happy Hour", desc: "Sertanejo e Pop para o fim da tarde", icon: "\u{1F389}" },
    { time: "20:00 - 22:00", name: "Noite de Samba", desc: "Samba, Pagode e Axe", icon: "\u{1F3B6}" },
    { time: "22:00 - 00:00", name: "Sessao Especial", desc: "Entrevistas e musica de qualidade", icon: "\u{1F399}\uFE0F" }
];

function renderSchedule() {
    var grid = document.getElementById('scheduleGrid');
    var ch = getRioHour();
    grid.innerHTML = schedule.map(function(item) {
        var s = parseInt(item.time.split(' - ')[0].split(':')[0]);
        var e = parseInt(item.time.split(' - ')[1].split(':')[0]);
        var cur = ch >= s && ch < e;
        return '<div class="schedule-item ' + (cur ? 'current' : '') + '">' +
            '<div class="schedule-time">' + item.time + '</div>' +
            '<div class="schedule-details"><h4>' + item.icon + ' ' + item.name + '</h4><p>' + item.desc + '</p></div>' +
            (cur ? '<div class="schedule-live"><i class="fas fa-circle"></i> AO VIVO</div>' : '') +
            '</div>';
    }).join('');
}
renderSchedule();
setInterval(renderSchedule, 60000);

// ========== PARTICLES ==========
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

// ========== PLAYLIST ==========
var playlist = [
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

// ========== LOCUCAO ==========
var songsPlayed = 0;
var isAnnouncing = false;
var savedVolume = 0.8;
var locucaoCount = 0;

var locucoesTexto = [
    function() {
        var h = getRioHour();
        var saudacao = h >= 5 && h < 12 ? 'Bom dia' : h >= 12 && h < 18 ? 'Boa tarde' : 'Boa noite';
        var hora = getRioTimeStr();
        var dias = ['domingo', 'segunda-feira', 'terca-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sabado'];
        var now = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }));
        var diaSemana = dias[now.getDay()];
        var dia = now.getDate();
        var meses = ['janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
        var mes = meses[now.getMonth()];
        return 'Atencao ouvintes! Sao ' + hora + ' horas, ' + diaSemana + ', ' + dia + ' de ' + mes + '. ' + saudacao + ', Rio de Janeiro! Voce esta ouvindo a Pires FM, a voz do Rio de Janeiro. Agora, vamos continuar com mais musica boa.';
    },
    function() {
        var fatos = [
            'Que tal uma curiosidade? O Cristo Redentor, uma das Sete Maravilhas do Mundo Moderno, fica no topo do Corcovado, a setecentos e dez metros de altitude.',
            'Sabe qual e a maior prai urbana do mundo? E a Praya de Copacabana, com seus famosos quatro quilometros de areia. Um icone do Rio de Janeiro.',
            'O Pao de Acucar e um dos cartoes-postais mais famosos do mundo. Seu teleferico, inaugurado em mil novecentos e doze, leva os visitantes ao topo.',
            'A Lagoa Rodrigo de Freitas, no coracao da Zona Sul, e um dos pontos mais agradaveis do Rio. Perfeita para caminhadas e contemplar a paisagem.',
            'O Maracana, o estadio mais famoso do Brasil, ja recebeu mais de duzentas mil pessoas em uma partida. Um templo do futebol no Rio.',
            'O Jardim Botanico do Rio, fundado em mil oitocentos e oito, abriga mais de oito mil especies de plantas.',
            'A Lapa, com seus arcos historicos, e o coracao da vida noturna carioca. De samba a eletronica, la voce encontra de tudo.',
            'O bondinho de Santa Teresa e um dos meios de transporte mais charmosos do mundo. Pela janela, voce ve o Rio de todos os angulos.',
            'A Baia de Guanabara, uma das mais grandes baia do mundo, banha a cidade do Rio de Janeiro.',
            'A Floresta da Tijuca, considerada a maior floresta urbana do mundo, fica dentro da cidade do Rio de Janeiro.',
            'O Rio de Janeiro foi capital do Brasil por quase duzentos anos. Uma cidade que carrega seculos de historia em cada esquina.',
            'O Arpoador e o melhor lugar da cidade para assistir ao por do sol. Uma tradicao carioca de aplaudir o sol quando se poe.',
            'O Carnaval do Rio de Janeiro e considerado o maior do mundo. Mais de dois milhoes de pessoas saem as ruas todos os anos.',
            'A prai de Ipanema, imortalizada na musica de Tom Jobim e Vinicius de Moraes, e um dos destinos mais procurados do Rio.',
            'O Elevador do Lacer, inaugurado em mil oitocentos e oitenta e cinco, conecta a prai de Flamengo ao bairro da Gloria.',
            'O Convento de Santo Antonio, no centro do Rio, e um dos mais antigos da cidade, construido no seculo dezessete.',
            'A Pedra da Gavea, com seus setecentos e quarenta metros, e um dos monolitos costeiros mais impressionantes do mundo.',
            'O Parque Nacional da Tijuca, no meio da cidade, oferece trilhas, cachoeiras e uma vista incrivel da Baia de Guanabara.',
            'O Museu de Arte Contemporanea, no aterro do Flamengo, abriga uma das maiores colecoes de arte moderna do Brasil.',
            'A Estacao Central do Brasil, construida em mil novecentos e dez, e um dos marcos arquitetonicos do Rio de Janeiro.'
        ];
        return fatos[Math.floor(Math.random() * fatos.length)];
    },
    function() {
        var noticia = [
            'Uma noticia para voce que ama o Rio. A cidade segue recebendo milhoes de turistas todos os anos, consolidando-se como um dos destinos mais visitados do planeta.',
            'Informacao para os ouvintes: o transporte publico do Rio de Janeiro esta expandindo suas linhas, facilitando o deslocamento por toda a cidade.',
            'Novidade para quem vive no Rio: novos parques e areas de lazer estao sendo inaugurados, tornando a cidade ainda mais agradavel.',
            'Dica cultural: diversos eventos culturais acontecem por todo o Rio ao longo do ano, desde exposicoes de arte ate shows ao vivo.',
            'Para voce que gosta de gastronomia, o Rio de Janeiro se consolidou como destino gastronomico de classe mundial.',
            'Na area da tecnologia, o Rio de Janeiro vem se tornando um polo de inovacao, com hubs de tecnologia e startups crescendo pela cidade.',
            'Os projetos de preservacao das praias e da fauna marinha do Rio estao em constante evolucao, garantindo a preservacao das belezas naturais.',
            'O Rio prepara-se para receber mais eventos internacionais, consolidando-se como um dos principais polos de entretenimento da America Latina.',
            'Os moradores do Rio comemoram a ampliacao de areas verdes na cidade, com novos projetos de reflorestamento urbano.',
            'A cena musical do Rio continua vibrante, com novos festivais de musica sendo anunciados para este ano.',
            'O turismo sustentavel cresce no Rio, com comunitarios e pousadas adotando praticas ecologicas.',
            'Os bondes de Santa Teresa voltam a operar com regularidade, trazendo de volta um transporte historico da cidade.'
        ];
        return noticia[Math.floor(Math.random() * noticia.length)];
    },
    function() {
        var h = getRioHour();
        var prog = schedule[0];
        for (var i = 0; i < schedule.length; i++) {
            var sh = parseInt(schedule[i].time.split(' - ')[0].split(':')[0]);
            var eh = parseInt(schedule[i].time.split(' - ')[1].split(':')[0]);
            if (h >= sh && h < eh) { prog = schedule[i]; break; }
        }
        return 'Lembrete de programacao: no momento, esta no ar o programa ' + prog.name + '! ' + prog.desc + '. Fique ligado na Pires FM para acompanhar toda a nossa grade.';
    },
    function() {
        var dicas = [
            'Dica do dia: o Rio de Janeiro oferece mais de oitenta praias. Ja visitou todas? A prai de Prainha e um tesouro escondido na Zona Oeste.',
            'Sabia que o Rio e a cidade com mais helipontos do Brasil? A vista de cima e simplesmente de tirar o folego.',
            'Curiosidade: o nome Rio de Janeiro veio de um erro de navegacao. Os portugueses acharam que a baia era a boca de um rio.',
            'O Cristo Redentor ja foi eleito uma das Sete Novas Maravilhas do Mundo. Quarenta metros de altura, no topo do Corcovado.',
            'A Lapa e conhecida mundialmente por suas noites agitadas. De terca a domingo, os arcos historicos iluminam a vida noturna carioca.',
            'O Rio de Janeiro tem o maior parque urbano do mundo: a Floresta da Tijuca, com mais de trezentos quilometros quadrados.',
            'O Rio abriga o maior estadio de futebol do Brasil: o Maracana, com capacidade para mais de setenta mil pessoas.'
        ];
        return dicas[Math.floor(Math.random() * dicas.length)];
    },
    function() {
        var mensagens = [
            'Voce esta ouvindo a Pires FM, a voz do Rio de Janeiro. Fique conosco, tem muito mais musica boa por vir.',
            'Pires FM, sempre com voce. A melhor musica do Rio e do Brasil, agora no ar.',
            'Essa e a Pires FM, onde a musica nunca para. Acompanhe nossa programacao completa no site.',
            'Continuamos na Pires FM, trazendo o melhor da musica brasileira para voce.',
            'Pires FM, a emissora que toca o coracao do Rio. Fique ligado!',
            'Agradecemos a sua sintonia na Pires FM. Continue connosco para mais musica e informacoes.',
            'Pires FM, sua radio online favorita. Compartilhe com seus amigos e curta a musica.'
        ];
        return mensagens[Math.floor(Math.random() * mensagens.length)];
    }
];

function getFemaleVoice() {
    var voices = speechSynthesis.getVoices();
    var ptBR = voices.filter(function(v) { return v.lang.indexOf('pt') === 0 && v.lang.indexOf('BR') >= 0; });
    if (ptBR.length > 0) {
        var female = ptBR.find(function(v) {
            var n = v.name.toLowerCase();
            return n.indexOf('femin') >= 0 || n.indexOf('female') >= 0 || n.indexOf('helena') >= 0 || n.indexOf('francisca') >= 0 || n.indexOf('vitoria') >= 0;
        });
        return female || ptBR[0];
    }
    var pt = voices.filter(function(v) { return v.lang.indexOf('pt') === 0; });
    if (pt.length > 0) return pt[0];
    return voices.length > 0 ? voices[0] : null;
}

speechSynthesis.onvoiceschanged = function() { speechSynthesis.getVoices(); };

function doLocucao(callback) {
    speechSynthesis.cancel();
    locucaoCount++;
    var idx = Math.floor(Math.random() * locucoesTexto.length);
    var texto = locucoesTexto[idx]();
    var utter = new SpeechSynthesisUtterance(texto);
    var voice = getFemaleVoice();
    if (voice) utter.voice = voice;
    utter.lang = 'pt-BR';
    utter.rate = 0.92;
    utter.pitch = 1.15;
    utter.volume = 1.0;

    utter.onstart = function() {
        isAnnouncing = true;
        var np = document.getElementById('nowPlaying');
        if (np) np.classList.add('announcing');
        document.getElementById('trackName').textContent = 'Locucao Pires FM';
        document.getElementById('trackArtist').textContent = 'Sua locutora falando agora...';
        var ss = document.getElementById('streamStatus');
        ss.innerHTML = '<i class="fas fa-microphone"></i> <span>Locucao - Pires FM</span>';
        ss.className = 'stream-status connected';
        try {
            savedVolume = audio.volume;
            audio.volume = 0.03;
        } catch(e) {}
    };

    utter.onend = function() {
        isAnnouncing = false;
        var np = document.getElementById('nowPlaying');
        if (np) np.classList.remove('announcing');
        try { audio.volume = savedVolume; } catch(e) {}
        setTimeout(function() { if (callback) callback(); }, 800);
    };

    utter.onerror = function() {
        isAnnouncing = false;
        var np = document.getElementById('nowPlaying');
        if (np) np.classList.remove('announcing');
        try { audio.volume = savedVolume; } catch(e) {}
        if (callback) callback();
    };

    speechSynthesis.speak(utter);
}

// ========== AUDIO PLAYER ==========
var audio = document.getElementById('radioAudio');
if (!audio) {
    audio = new Audio();
    audio.id = 'radioAudio';
}
var isPlaying = false;
var currentTrackIndex = 0;
var isShuffled = false;
var isRepeating = false;
var shuffledOrder = [];

var playBtn = document.getElementById('playBtn');
var playIcon = document.getElementById('playIcon');
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');
var shuffleBtn = document.getElementById('shuffleBtn');
var repeatBtn = document.getElementById('repeatBtn');
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
var currentTimeEl = document.getElementById('currentTime');
var totalTimeEl = document.getElementById('totalTime');
var trackCounterEl = document.getElementById('trackCounter');
var playlistBody = document.getElementById('playlistBody');

audio.volume = (volumeSlider ? volumeSlider.value : 80) / 100;
audio.preload = 'auto';

// ========== SHUFFLE ==========
function buildShuffledOrder() {
    shuffledOrder = [];
    for (var i = 0; i < playlist.length; i++) shuffledOrder.push(i);
    for (var i = shuffledOrder.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = shuffledOrder[i];
        shuffledOrder[i] = shuffledOrder[j];
        shuffledOrder[j] = temp;
    }
}

function getNextIndex() {
    if (isShuffled) {
        var pos = shuffledOrder.indexOf(currentTrackIndex);
        return shuffledOrder[(pos + 1) % shuffledOrder.length];
    }
    return (currentTrackIndex + 1) % playlist.length;
}

function getPrevIndex() {
    if (isShuffled) {
        var pos = shuffledOrder.indexOf(currentTrackIndex);
        return shuffledOrder[(pos - 1 + shuffledOrder.length) % shuffledOrder.length];
    }
    return (currentTrackIndex - 1 + playlist.length) % playlist.length;
}

// ========== RENDER PLAYLIST ==========
function renderPlaylist() {
    if (!playlistBody) return;
    var html = '';
    for (var i = 0; i < playlist.length; i++) {
        var track = playlist[i];
        var isCurrent = i === currentTrackIndex;
        html += '<tr class="playlist-row ' + (isCurrent ? 'current' : '') + '" data-index="' + i + '">' +
            '<td class="pl-number">' + (isCurrent && isPlaying ? '<i class="fas fa-volume-up"></i>' : (i + 1)) + '</td>' +
            '<td class="pl-info"><span class="pl-song">' + track.song + '</span><span class="pl-artist">' + track.artist + '</span></td>' +
            '<td class="pl-duration"></td></tr>';
    }
    playlistBody.innerHTML = html;
    var rows = playlistBody.querySelectorAll('.playlist-row');
    for (var r = 0; r < rows.length; r++) {
        rows[r].addEventListener('click', function() {
            currentTrackIndex = parseInt(this.dataset.index);
            loadAndPlay();
        });
    }
}

// ========== PLAYER ==========
var errorRetryCount = 0;
var MAX_RETRIES = 3;

function loadAndPlay() {
    if (MODE === "remote") {
        loadRemoteStream();
        return;
    }
    if (MODE === "cloud") {
        loadCloudTrack();
        return;
    }
    if (currentTrackIndex < 0 || currentTrackIndex >= playlist.length) currentTrackIndex = 0;
    var track = playlist[currentTrackIndex];
    var url = 'music/' + encodeURIComponent(track.file);

    audio.pause();
    audio.removeAttribute('src');
    audio.load();
    audio.src = url;
    audio.load();

    audio.oncanplay = function() {
        audio.oncanplay = null;
        errorRetryCount = 0;
        audio.play().then(function() {
            setPlayingState(true);
            trackNameEl.textContent = track.song;
            trackArtistEl.textContent = track.artist;
            renderPlaylist();
            updateCounter();
        }).catch(function(err) {
            console.error('Play error:', err);
            streamStatus.innerHTML = '<i class="fas fa-exclamation-triangle"></i> <span>Clique para tentar novamente</span>';
            streamStatus.className = 'stream-status error';
        });
    };

    audio.onerror = function(e) {
        audio.oncanplay = null;
        errorRetryCount++;
        console.error('Audio error:', track.file, 'tentativa ' + errorRetryCount);
        if (errorRetryCount < MAX_RETRIES) {
            streamStatus.innerHTML = '<i class="fas fa-redo"></i> <span>Reconectando... (' + errorRetryCount + '/' + MAX_RETRIES + ')</span>';
            streamStatus.className = 'stream-status error';
            setTimeout(function() { loadAndPlay(); }, 2000);
        } else {
            errorRetryCount = 0;
            streamStatus.innerHTML = '<i class="fas fa-forward"></i> <span>Pulando musica...</span>';
            streamStatus.className = 'stream-status error';
            setTimeout(function() { playNext(); }, 1500);
        }
    };

    streamStatus.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Carregando...</span>';
    streamStatus.className = 'stream-status';
}

function loadRemoteStream() {
    audio.pause();
    audio.src = STREAM_URL;
    audio.load();
    audio.play().then(function() {
        setPlayingState(true);
        trackNameEl.textContent = 'Pires FM - Ao Vivo';
        trackArtistEl.textContent = 'Transmissao 24/7 via Icecast';
    }).catch(function(err) {
        console.error('Stream error:', err);
        streamStatus.innerHTML = '<i class="fas fa-exclamation-triangle"></i> <span>Erro ao conectar ao stream</span>';
        streamStatus.className = 'stream-status error';
        setTimeout(function() { loadRemoteStream(); }, 3000);
    });
    streamStatus.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Conectando ao stream...</span>';
    streamStatus.className = 'stream-status';
}

function loadCloudTrack() {
    if (currentTrackIndex < 0 || currentTrackIndex >= playlist.length) currentTrackIndex = 0;
    var track = playlist[currentTrackIndex];
    var url = 'https://archive.org/download/' + ARCHIVE_ITEM + '/' + encodeURIComponent(track.file);

    audio.pause();
    audio.src = url;
    audio.load();

    audio.oncanplay = function() {
        audio.oncanplay = null;
        errorRetryCount = 0;
        audio.play().then(function() {
            setPlayingState(true);
            trackNameEl.textContent = track.song;
            trackArtistEl.textContent = track.artist;
            renderPlaylist();
            updateCounter();
        }).catch(function(err) {
            console.error('Cloud play error:', err);
            streamStatus.innerHTML = '<i class="fas fa-exclamation-triangle"></i> <span>Erro ao tocar. Tentando novamente...</span>';
            streamStatus.className = 'stream-status error';
            setTimeout(function() { loadCloudTrack(); }, 2000);
        });
    };

    audio.onerror = function() {
        audio.oncanplay = null;
        errorRetryCount++;
        if (errorRetryCount < MAX_RETRIES) {
            streamStatus.innerHTML = '<i class="fas fa-redo"></i> <span>Reconectando... (' + errorRetryCount + '/' + MAX_RETRIES + ')</span>';
            streamStatus.className = 'stream-status error';
            setTimeout(function() { loadCloudTrack(); }, 3000);
        } else {
            errorRetryCount = 0;
            playNext();
        }
    };

    streamStatus.innerHTML = '<i class="fas fa-cloud"></i> <span>Carregando da nuvem...</span>';
    streamStatus.className = 'stream-status';
}

function playNextWithLocucao() {
    if (isAnnouncing) return;
    songsPlayed++;
    if (songsPlayed >= 3 && isPlaying) {
        songsPlayed = 0;
        doLocucao(function() {
            currentTrackIndex = getNextIndex();
            loadAndPlay();
        });
    } else {
        currentTrackIndex = getNextIndex();
        loadAndPlay();
    }
}

function playNext() {
    if (isAnnouncing) { speechSynthesis.cancel(); isAnnouncing = false; }
    currentTrackIndex = getNextIndex();
    loadAndPlay();
}

function playPrev() {
    if (isAnnouncing) { speechSynthesis.cancel(); isAnnouncing = false; }
    if (audio.currentTime > 3) { audio.currentTime = 0; return; }
    currentTrackIndex = getPrevIndex();
    loadAndPlay();
}

function setPlayingState(playing) {
    isPlaying = playing;
    if (playing) {
        playIcon.className = 'fas fa-pause';
        playBtn.classList.add('playing');
        streamStatus.innerHTML = '<i class="fas fa-wifi"></i> <span>Tocando agora - Pires FM</span>';
        streamStatus.className = 'stream-status connected';
        visualizerEl.classList.add('active');
        vinylEl.classList.add('spinning');
    } else {
        playIcon.className = 'fas fa-play';
        playBtn.classList.remove('playing');
        streamStatus.innerHTML = '<i class="fas fa-wifi"></i> <span>Clique no play para ouvir</span>';
        streamStatus.className = 'stream-status';
        visualizerEl.classList.remove('active');
        vinylEl.classList.remove('spinning');
        var bars = document.querySelectorAll('.visualizer .bar');
        for (var i = 0; i < bars.length; i++) bars[i].style.height = '5px';
    }
    renderPlaylist();
}

function updateCounter() {
    if (trackCounterEl) trackCounterEl.textContent = (currentTrackIndex + 1) + ' / ' + playlist.length;
}

function formatTime(s) {
    if (isNaN(s)) return '0:00';
    var m = Math.floor(s / 60);
    var sec = Math.floor(s % 60);
    return m + ':' + (sec < 10 ? '0' : '') + sec;
}

// ========== EVENTS ==========
playBtn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (isAnnouncing) {
        speechSynthesis.cancel();
        isAnnouncing = false;
        audio.volume = savedVolume;
        document.getElementById('nowPlaying').classList.remove('announcing');
    }
    if (isPlaying) {
        audio.pause();
        setPlayingState(false);
    } else {
        songsPlayed = 0;
        loadAndPlay();
    }
});

nextBtn.addEventListener('click', function(e) { e.preventDefault(); playNext(); });
prevBtn.addEventListener('click', function(e) { e.preventDefault(); playPrev(); });

shuffleBtn.addEventListener('click', function() {
    isShuffled = !isShuffled;
    shuffleBtn.classList.toggle('active', isShuffled);
    if (isShuffled) buildShuffledOrder();
});

repeatBtn.addEventListener('click', function() {
    isRepeating = !isRepeating;
    repeatBtn.classList.toggle('active', isRepeating);
    audio.loop = isRepeating;
});

audio.addEventListener('timeupdate', function() {
    if (audio.duration && isFinite(audio.duration)) {
        progressBar.style.width = (audio.currentTime / audio.duration * 100) + '%';
        currentTimeEl.textContent = formatTime(audio.currentTime);
        totalTimeEl.textContent = formatTime(audio.duration);
    }
});

audio.addEventListener('ended', function() {
    if (!isRepeating) playNextWithLocucao();
});

if (progressContainer) {
    progressContainer.addEventListener('click', function(e) {
        if (audio.duration && isFinite(audio.duration)) {
            var rect = progressContainer.getBoundingClientRect();
            audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
        }
    });
}

// VOLUME
volumeSlider.addEventListener('input', function(e) {
    var v = e.target.value;
    audio.volume = v / 100;
    volumeValue.textContent = v + '%';
    volumeIcon.className = v == 0 ? 'fas fa-volume-mute' : v < 50 ? 'fas fa-volume-down' : 'fas fa-volume-up';
});

volumeIcon.addEventListener('click', function() {
    if (audio.volume > 0) {
        audio.dataset.pv = volumeSlider.value;
        volumeSlider.value = 0;
        audio.volume = 0;
        volumeValue.textContent = '0%';
        volumeIcon.className = 'fas fa-volume-mute';
    } else {
        var p = audio.dataset.pv || 80;
        volumeSlider.value = p;
        audio.volume = p / 100;
        volumeValue.textContent = p + '%';
        volumeIcon.className = p < 50 ? 'fas fa-volume-down' : 'fas fa-volume-up';
    }
});

// VISUALIZER
(function animVis() {
    if (isPlaying && !isAnnouncing) {
        var bars = document.querySelectorAll('.visualizer .bar');
        for (var i = 0; i < bars.length; i++) {
            bars[i].style.height = (Math.random() * 50 + 5) + 'px';
        }
    }
    requestAnimationFrame(function() { setTimeout(animVis, 100); });
})();

// ========== MENU ==========
document.getElementById('menuToggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('mobileNav').classList.toggle('active');
});
var mobileLinks = document.querySelectorAll('.mobile-link');
for (var i = 0; i < mobileLinks.length; i++) {
    mobileLinks[i].addEventListener('click', function() {
        document.getElementById('menuToggle').classList.remove('active');
        document.getElementById('mobileNav').classList.remove('active');
    });
}

// ========== SCROLL ==========
window.addEventListener('scroll', function() {
    document.querySelector('.header').classList.toggle('scrolled', window.scrollY > 50);
});

// ========== CONTACT FORM ==========
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var btn = e.target.querySelector('.submit-btn');
    var orig = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Mensagem Enviada!';
    btn.style.background = 'linear-gradient(135deg, #4caf50, #2e7d32)';
    setTimeout(function() { btn.innerHTML = orig; btn.style.background = ''; e.target.reset(); }, 3000);
});

// ========== ACTIVE NAV ==========
window.addEventListener('scroll', function() {
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

// ========== KEYBOARD ==========
document.addEventListener('keydown', function(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.code === 'Space') { e.preventDefault(); playBtn.click(); }
    else if (e.code === 'ArrowRight') { e.preventDefault(); playNext(); }
    else if (e.code === 'ArrowLeft') { e.preventDefault(); playPrev(); }
});

// ========== INIT ==========
speechSynthesis.getVoices();
buildShuffledOrder();
renderPlaylist();
updateCounter();

// ========== AUTOPLAY ==========
var autoplayOverlay = document.getElementById('autoplayOverlay');
var autoplayBtn = document.getElementById('autoplayBtn');

function startPlaying() {
    if (autoplayOverlay && !autoplayOverlay.classList.contains('hidden')) {
        autoplayOverlay.classList.add('hidden');
    }
    songsPlayed = 0;
    loadAndPlay();
}

if (autoplayBtn) {
    autoplayBtn.addEventListener('click', function(e) {
        e.preventDefault();
        startPlaying();
    });
}

// Try direct autoplay first (works if user previously interacted with site)
setTimeout(function() {
    if (!isPlaying && autoplayOverlay && !autoplayOverlay.classList.contains('hidden')) {
        songsPlayed = 0;
        loadAndPlay();
        var tryPlay = audio.play();
        if (tryPlay) {
            tryPlay.then(function() {
                autoplayOverlay.classList.add('hidden');
            }).catch(function() {
                // Autoplay blocked, keep overlay visible
            });
        }
    }
}, 500);

console.log('%c Pires FM %c ' + playlist.length + ' musicas carregadas ',
    'background:#e63946;color:white;padding:5px 10px;border-radius:4px 0 0 4px;font-weight:bold',
    'background:#1d3557;color:white;padding:5px 10px;border-radius:0 4px 4px 0');
