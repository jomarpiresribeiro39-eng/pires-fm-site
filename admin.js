// ========== ADMIN PANEL ==========
var ADMIN_PASSWORD = '13237620';
var STORAGE_KEY = 'piresfm_admin';
var LOG_KEY = 'piresfm_logs';

// Default playlist
var DEFAULT_PLAYLIST = [
    { file: "001.mp3", artist: "Jorge Ben Jor", song: "Mas Que Nada" },
    { file: "002.mp3", artist: "Tom Jobim", song: "Garota de Ipanema" },
    { file: "003.mp3", artist: "Caetano Veloso", song: "Apareceu a Flores" },
    { file: "004.mp3", artist: "Roberto Carlos", song: "Detalhes" },
    { file: "005.mp3", artist: "Joao Gilberto", song: "Chega de Saudade" },
    { file: "006.mp3", artist: "MPB4", song: "Cotidiano" },
    { file: "007.mp3", artist: "Milton Nascimento", song: "Travessia" },
    { file: "008.mp3", artist: "Elis Regina", song: "Aguas de Marco" },
    { file: "009.mp3", artist: "Chico Buarque", song: "Construcao" },
    { file: "010.mp3", artist: "Gal Costa", song: "Divino Maravilhoso" },
    { file: "011.mp3", artist: "Marisa Monte", song: "Amor I Love You" },
    { file: "012.mp3", artist: "Djavan", song: "Flor e Beijo" },
    { file: "013.mp3", artist: "Ivete Sangalo", song: "Sorte Grande" },
    { file: "014.mp3", artist: "Sergio Mendes", song: "Mas Que Nada" },
    { file: "015.mp3", artist: "Tim Maia", song: "Volta" },
    { file: "016.mp3", artist: "Lulu Santos", song: "A Sua" },
    { file: "017.mp3", artist: "Raul Seixas", song: "Ouro de Tolo" },
    { file: "018.mp3", artist: "Legiao Urbana", song: "Ainda e Cedo" },
    { file: "019.mp3", artist: "Barao Vermelho", song: "Pro Dia Nascer Feliz" },
    { file: "020.mp3", artist: "Os Mutantes", song: "A Minha Menina" },
    { file: "021.mp3", artist: "Teresa Cristina", song: "Saudade" },
    { file: "022.mp3", artist: "Seu Jorge", song: "Carolina" },
    { file: "023.mp3", artist: "Ana Carolina", song: "Garganta" },
    { file: "024.mp3", artist: "Claudia Leitte", song: "Matimba" },
    { file: "025.mp3", artist: "Zeca Pagodinho", song: "Deixa a Vida Me Levar" },
    { file: "026.mp3", artist: "Martinho da Vila", song: "Divina" },
    { file: "027.mp3", artist: "Alceu Valença", song: "Anunciação" },
    { file: "028.mp3", artist: "Dominguinhos", song: "Esquinas" },
    { file: "029.mp3", artist: "Fafá de Belém", song: "Olhos Coloridos" },
    { file: "030.mp3", artist: "Rosana", song: "Dias Melhores" },
    { file: "031.mp3", artist: "Sandy", song: "Quando Voce Passa" },
    { file: "032.mp3", artist: "Jota Quest", song: "So Hoje" },
    { file: "033.mp3", artist: "Blitz", song: "Vontade de Mim" },
    { file: "034.mp3", artist: "Kid Abelha", song: "Por Onde Andei" },
    { file: "035.mp3", artist: "Skank", song: "Vou Deixar" },
    { file: "036.mp3", artist: "Jota Quest", song: "Dias Melhores" },
    { file: "037.mp3", artist: "Os Baroes da Pisadinha", song: "Dancando" },
    { file: "038.mp3", artist: "Joao Lucas & Marcelo", song: "Largado Atras" },
    { file: "039.mp3", artist: "Gusttavo Lima", song: "Balada" },
    { file: "040.mp3", artist: "Michel Telo", song: "Ai Se Eu Te Pego" },
    { file: "041.mp3", artist: "Henrique & Juliano", song: "Cem" },
    { file: "042.mp3", artist: "Maiara & Maraísa", song: "Bara Bará Bere Berê" },
    { file: "043.mp3", artist: "Simone & Simaria", song: "Levada da Vida" },
    { file: "044.mp3", artist: "Bruno & Marrone", song: "Vida Boa" },
    { file: "045.mp3", artist: "Luan Santana", song: "Sinais" },
    { file: "046.mp3", artist: "Ana & Jorginho", song: "Te Esperando" },
    { file: "047.mp3", artist: "Zé Neto & Cristiano", song: "Vai Dar Net" },
    { file: "048.mp3", artist: "Gusttavo Lima", song: "Bala de Prata" },
    { file: "049.mp3", artist: "Jorge & Mateus", song: "Praieiro" },
    { file: "050.mp3", artist: "Avine Vinny", song: "Mil Horas" },
    { file: "051.mp3", artist: "Belo", song: "Vida Loka" },
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

var LOCUCAO_FILES = {
    ident: ['ident_01.mp3','ident_02.mp3','ident_03.mp3','ident_04.mp3','ident_05.mp3','ident_06.mp3','ident_07.mp3','ident_08.mp3'],
    curiosidade: ['curiosidade_01.mp3','curiosidade_02.mp3','curiosidade_03.mp3','curiosidade_04.mp3','curiosidade_05.mp3','curiosidade_06.mp3','curiosidade_07.mp3','curiosidade_08.mp3','curiosidade_09.mp3','curiosidade_10.mp3','curiosidade_11.mp3','curiosidade_12.mp3','curiosidade_13.mp3','curiosidade_14.mp3','curiosidade_15.mp3','curiosidade_16.mp3','curiosidade_17.mp3','curiosidade_18.mp3','curiosidade_19.mp3','curiosidade_20.mp3'],
    noticia: ['noticia_01.mp3','noticia_02.mp3','noticia_03.mp3','noticia_04.mp3','noticia_05.mp3','noticia_06.mp3','noticia_07.mp3','noticia_08.mp3','noticia_09.mp3','noticia_10.mp3','noticia_11.mp3','noticia_12.mp3'],
    dica: ['dica_01.mp3','dica_02.mp3','dica_03.mp3','dica_04.mp3','dica_05.mp3','dica_06.mp3','dica_07.mp3'],
    programacao: ['programacao_01.mp3','programacao_02.mp3','programacao_03.mp3','programacao_04.mp3','programacao_05.mp3']
};

// ========== AUTH ==========
function getStoredData() {
    try {
        var d = JSON.parse(localStorage.getItem(STORAGE_KEY));
        return d || {};
    } catch(e) { return {}; }
}

function saveData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function isLoggedIn() {
    var d = getStoredData();
    return d.loggedIn === true;
}

function login() {
    var pass = document.getElementById('loginPassword').value;
    if (pass === ADMIN_PASSWORD) {
        var data = getStoredData();
        data.loggedIn = true;
        data.loginTime = new Date().toISOString();
        saveData(data);
        addLog('Admin fez login', 'info');
        showAdminPanel();
    } else {
        document.getElementById('loginError').textContent = 'Senha incorreta!';
        document.getElementById('loginPassword').value = '';
        document.getElementById('loginPassword').focus();
        addLog('Tentativa de login com senha errada', 'error');
    }
}

function logout() {
    var data = getStoredData();
    data.loggedIn = false;
    saveData(data);
    addLog('Admin fez logout', 'info');
    document.getElementById('loginScreen').classList.remove('hidden');
    document.getElementById('adminPanel').classList.add('hidden');
}

function showAdminPanel() {
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('adminPanel').classList.remove('hidden');
    loadDashboard();
}

// ========== LOGS ==========
function addLog(msg, type) {
    type = type || 'info';
    var logs = [];
    try { logs = JSON.parse(localStorage.getItem(LOG_KEY)) || []; } catch(e) {}
    var now = new Date();
    var time = now.toLocaleTimeString('pt-BR') + ' ' + now.toLocaleDateString('pt-BR');
    logs.unshift({ time: time, msg: msg, type: type });
    if (logs.length > 200) logs = logs.slice(0, 200);
    localStorage.setItem(LOG_KEY, JSON.stringify(logs));
}

function renderLogs() {
    var container = document.getElementById('logsContainer');
    var logs = [];
    try { logs = JSON.parse(localStorage.getItem(LOG_KEY)) || []; } catch(e) {}
    if (logs.length === 0) {
        container.innerHTML = '<p class="empty-logs">Nenhum log registrado ainda.</p>';
        return;
    }
    var html = '';
    for (var i = 0; i < logs.length; i++) {
        var l = logs[i];
        html += '<div class="log-entry"><span class="log-time">' + l.time + '</span><span class="log-msg ' + l.type + '">' + l.msg + '</span></div>';
    }
    container.innerHTML = html;
}

// ========== PLAYLIST ==========
function getPlaylist() {
    var data = getStoredData();
    if (data.playlist && data.playlist.length > 0) return data.playlist;
    return DEFAULT_PLAYLIST;
}

function savePlaylist(pl) {
    var data = getStoredData();
    data.playlist = pl;
    saveData(data);
}

function renderManagePlaylist() {
    var pl = getPlaylist();
    var tbody = document.getElementById('managePlaylistBody');
    var html = '';
    for (var i = 0; i < pl.length; i++) {
        html += '<tr>' +
            '<td><span class="file-badge">' + (i+1) + '</span></td>' +
            '<td><span class="file-badge">' + pl[i].file + '</span></td>' +
            '<td>' + pl[i].song + '</td>' +
            '<td style="color:var(--text-muted);">' + pl[i].artist + '</td>' +
            '<td class="actions">' +
            '<button class="btn btn-secondary btn-sm" onclick="editTrack(' + i + ')"><i class="fas fa-edit"></i></button>' +
            '<button class="btn btn-danger btn-sm" onclick="removeTrack(' + i + ')"><i class="fas fa-trash"></i></button>' +
            (i > 0 ? '<button class="btn btn-secondary btn-sm" onclick="moveTrack(' + i + ',-1)"><i class="fas fa-arrow-up"></i></button>' : '') +
            (i < pl.length - 1 ? '<button class="btn btn-secondary btn-sm" onclick="moveTrack(' + i + ',1)"><i class="fas fa-arrow-down"></i></button>' : '') +
            '</td></tr>';
    }
    tbody.innerHTML = html;
}

function removeTrack(idx) {
    var pl = getPlaylist();
    var removed = pl.splice(idx, 1)[0];
    savePlaylist(pl);
    renderManagePlaylist();
    updateDashboardStats();
    addLog('Música removida: ' + removed.artist + ' - ' + removed.song, 'warning');
}

function moveTrack(idx, dir) {
    var pl = getPlaylist();
    var newIdx = idx + dir;
    if (newIdx < 0 || newIdx >= pl.length) return;
    var temp = pl[idx];
    pl[idx] = pl[newIdx];
    pl[newIdx] = temp;
    savePlaylist(pl);
    renderManagePlaylist();
    addLog('Música movida: ' + temp.song + ' para posição ' + (newIdx+1), 'info');
}

function editTrack(idx) {
    var pl = getPlaylist();
    document.getElementById('editTrackIndex').value = idx;
    document.getElementById('editTrackFile').value = pl[idx].file;
    document.getElementById('editTrackSong').value = pl[idx].song;
    document.getElementById('editTrackArtist').value = pl[idx].artist;
    document.getElementById('editTrackModal').classList.remove('hidden');
}

function saveEditTrack() {
    var idx = parseInt(document.getElementById('editTrackIndex').value);
    var pl = getPlaylist();
    pl[idx].song = document.getElementById('editTrackSong').value;
    pl[idx].artist = document.getElementById('editTrackArtist').value;
    savePlaylist(pl);
    renderManagePlaylist();
    document.getElementById('editTrackModal').classList.add('hidden');
    addLog('Música editada: ' + pl[idx].artist + ' - ' + pl[idx].song, 'info');
}

function addTrack() {
    var file = document.getElementById('newTrackFile').value;
    var song = document.getElementById('newTrackSong').value;
    var artist = document.getElementById('newTrackArtist').value;
    if (!file || !song || !artist) {
        alert('Preencha todos os campos!');
        return;
    }
    var pl = getPlaylist();
    pl.push({ file: file, song: song, artist: artist });
    savePlaylist(pl);
    renderManagePlaylist();
    updateDashboardStats();
    document.getElementById('addTrackModal').classList.add('hidden');
    document.getElementById('newTrackSong').value = '';
    document.getElementById('newTrackArtist').value = '';
    addLog('Música adicionada: ' + artist + ' - ' + song, 'info');
}

function populateFileSelect() {
    var used = getPlaylist().map(function(t) { return t.file; });
    var select = document.getElementById('newTrackFile');
    var html = '<option value="">Selecione...</option>';
    for (var i = 1; i <= 66; i++) {
        var f = String(i).padStart(3, '0') + '.mp3';
        html += '<option value="' + f + '">' + f + '</option>';
    }
    select.innerHTML = html;
}

function exportPlaylist() {
    var pl = getPlaylist();
    var json = JSON.stringify(pl, null, 2);
    var blob = new Blob([json], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'pires_fm_playlist.json';
    a.click();
    URL.revokeObjectURL(url);
    addLog('Playlist exportada (' + pl.length + ' músicas)', 'info');
}

function importPlaylist() {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = function(e) {
        var file = e.target.files[0];
        if (!file) return;
        var reader = new FileReader();
        reader.onload = function(ev) {
            try {
                var pl = JSON.parse(ev.target.result);
                if (Array.isArray(pl) && pl.length > 0) {
                    savePlaylist(pl);
                    renderManagePlaylist();
                    updateDashboardStats();
                    addLog('Playlist importada (' + pl.length + ' músicas)', 'info');
                    alert('Playlist importada com sucesso!');
                } else {
                    alert('Formato inválido!');
                }
            } catch(e) {
                alert('Erro ao importar: ' + e.message);
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

// ========== DASHBOARD ==========
function loadDashboard() {
    updateDashboardStats();
    renderNextTracks();
}

function updateDashboardStats() {
    var pl = getPlaylist();
    document.getElementById('statTracks').textContent = pl.length;

    var totalLoc = 0;
    for (var k in LOCUCAO_FILES) totalLoc += LOCUCAO_FILES[k].length;
    document.getElementById('statLocucoes').textContent = totalLoc;
}

function renderNextTracks() {
    var pl = getPlaylist();
    var EPOCH = new Date('2025-01-01T00:00:00-03:00').getTime();
    var AVG_SONG = 240;
    var elapsed = (Date.now() - EPOCH) / 1000;
    var idx = Math.floor(elapsed / AVG_SONG) % pl.length;

    var container = document.getElementById('nextTracks');
    var html = '';
    for (var i = 0; i < 10; i++) {
        var trackIdx = (idx + i) % pl.length;
        var t = pl[trackIdx];
        html += '<div class="track-item">' +
            '<div class="track-num">' + (i + 1) + '</div>' +
            '<div class="track-details">' +
            '<div class="track-song">' + t.song + '</div>' +
            '<div class="track-artist">' + t.artist + '</div>' +
            '</div></div>';
    }
    container.innerHTML = html;
}

// ========== LOCUÇÕES ==========
function renderLocucoes() {
    for (var tipo in LOCUCAO_FILES) {
        var list = document.getElementById('loc' + tipo.charAt(0).toUpperCase() + tipo.slice(1) + 'List');
        if (!list) continue;
        var files = LOCUCAO_FILES[tipo];
        var html = '';
        for (var i = 0; i < files.length; i++) {
            html += '<div class="loc-item"><i class="fas fa-file-audio"></i><span>' + files[i] + '</span></div>';
        }
        list.innerHTML = html;
    }
}

// ========== CONFIG ==========
function loadConfig() {
    var data = getStoredData();
    var cfg = data.config || {};
    document.getElementById('cfgAvgSong').value = cfg.avgSong || 240;
    document.getElementById('cfgLocEvery').value = cfg.locEvery || 3;
    document.getElementById('cfgLocDuration').value = cfg.locDuration || 12;
    document.getElementById('cfgVoice').value = cfg.voice || 'pt-BR-FranciscaNeural';
}

function saveConfig() {
    var data = getStoredData();
    data.config = {
        avgSong: parseInt(document.getElementById('cfgAvgSong').value),
        locEvery: parseInt(document.getElementById('cfgLocEvery').value),
        locDuration: parseInt(document.getElementById('cfgLocDuration').value),
        voice: document.getElementById('cfgVoice').value
    };
    saveData(data);
    addLog('Configurações salvas', 'info');
    alert('Configurações salvas com sucesso!');
}

function resetConfig() {
    if (!confirm('Restaurar configurações padrão?')) return;
    var data = getStoredData();
    delete data.config;
    saveData(data);
    loadConfig();
    addLog('Configurações restauradas para padrão', 'warning');
}

function changePassword() {
    var oldPass = document.getElementById('cfgOldPass').value;
    var newPass = document.getElementById('cfgNewPass').value;
    var confirmPass = document.getElementById('cfgConfirmPass').value;

    if (oldPass !== ADMIN_PASSWORD) {
        alert('Senha atual incorreta!');
        return;
    }
    if (newPass.length < 4) {
        alert('A nova senha deve ter pelo menos 4 caracteres!');
        return;
    }
    if (newPass !== confirmPass) {
        alert('As senhas não conferem!');
        return;
    }
    ADMIN_PASSWORD = newPass;
    document.getElementById('cfgOldPass').value = '';
    document.getElementById('cfgNewPass').value = '';
    document.getElementById('cfgConfirmPass').value = '';
    addLog('Senha do admin alterada', 'warning');
    alert('Senha alterada com sucesso!');
}

// ========== LOGS ==========
function clearLogs() {
    if (!confirm('Limpar todos os logs?')) return;
    localStorage.removeItem(LOG_KEY);
    renderLogs();
}

// ========== NAVIGATION ==========
function switchTab(tabName) {
    var tabs = document.querySelectorAll('.tab-content');
    for (var i = 0; i < tabs.length; i++) tabs[i].classList.remove('active');
    var navItems = document.querySelectorAll('.nav-item[data-tab]');
    for (var i = 0; i < navItems.length; i++) navItems[i].classList.remove('active');

    var tab = document.getElementById('tab-' + tabName);
    if (tab) tab.classList.add('active');
    var nav = document.querySelector('.nav-item[data-tab="' + tabName + '"]');
    if (nav) nav.classList.add('active');

    var titles = { dashboard: 'Dashboard', playlist: 'Playlist', locucoes: 'Locuções', config: 'Configurações', logs: 'Logs' };
    document.getElementById('pageTitle').textContent = titles[tabName] || tabName;

    if (tabName === 'logs') renderLogs();
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', function() {
    if (isLoggedIn()) {
        showAdminPanel();
    }

    // Login
    document.getElementById('loginBtn').addEventListener('click', login);
    document.getElementById('loginPassword').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') login();
    });

    // Logout
    document.getElementById('logoutBtn').addEventListener('click', function(e) {
        e.preventDefault();
        logout();
    });

    // Nav
    var navItems = document.querySelectorAll('.nav-item[data-tab]');
    for (var i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('click', function(e) {
            e.preventDefault();
            switchTab(this.dataset.tab);
        });
    }

    // Mobile toggle
    document.getElementById('menuToggle').addEventListener('click', function() {
        document.getElementById('sidebar').classList.toggle('open');
    });

    // Playlist management
    document.getElementById('addTrackBtn').addEventListener('click', function() {
        populateFileSelect();
        document.getElementById('addTrackModal').classList.remove('hidden');
    });
    document.getElementById('closeModal').addEventListener('click', function() {
        document.getElementById('addTrackModal').classList.add('hidden');
    });
    document.getElementById('cancelModal').addEventListener('click', function() {
        document.getElementById('addTrackModal').classList.add('hidden');
    });
    document.getElementById('saveTrackBtn').addEventListener('click', addTrack);
    document.getElementById('exportPlaylistBtn').addEventListener('click', exportPlaylist);
    document.getElementById('importPlaylistBtn').addEventListener('click', importPlaylist);

    // Edit track
    document.getElementById('closeEditModal').addEventListener('click', function() {
        document.getElementById('editTrackModal').classList.add('hidden');
    });
    document.getElementById('cancelEditModal').addEventListener('click', function() {
        document.getElementById('editTrackModal').classList.add('hidden');
    });
    document.getElementById('saveEditTrackBtn').addEventListener('click', saveEditTrack);

    // Config
    document.getElementById('saveConfigBtn').addEventListener('click', saveConfig);
    document.getElementById('resetConfigBtn').addEventListener('click', resetConfig);
    document.getElementById('changePassBtn').addEventListener('click', changePassword);

    // Logs
    document.getElementById('clearLogsBtn').addEventListener('click', clearLogs);

    // Initial renders
    renderManagePlaylist();
    renderLocucoes();
    loadConfig();
    renderLogs();
});

console.log('%c Pires FM Admin %c Painel Administrativo ',
    'background:#e63946;color:white;padding:5px 10px;border-radius:4px 0 0 4px;font-weight:bold',
    'background:#1d3557;color:white;padding:5px 10px;border-radius:0 4px 4px 0');
