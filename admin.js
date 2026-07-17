// ========== ADMIN PANEL ==========
var ADMIN_EMAIL = 'jomarpiresribeiro39@gmail.com';
var STORAGE_KEY = 'piresfm_admin';
var LOG_KEY = 'piresfm_logs';
var REQUESTS_KEY = 'piresfm_requests';

// Default playlist
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

var LOCUCAO_FILES = {
    ident: ['ident_01.mp3','ident_02.mp3','ident_03.mp3','ident_04.mp3','ident_05.mp3','ident_06.mp3','ident_07.mp3','ident_08.mp3'],
    curiosidade: ['curiosidade_01.mp3','curiosidade_02.mp3','curiosidade_03.mp3','curiosidade_04.mp3','curiosidade_05.mp3','curiosidade_06.mp3','curiosidade_07.mp3','curiosidade_08.mp3','curiosidade_09.mp3','curiosidade_10.mp3','curiosidade_11.mp3','curiosidade_12.mp3','curiosidade_13.mp3','curiosidade_14.mp3','curiosidade_15.mp3','curiosidade_16.mp3','curiosidade_17.mp3','curiosidade_18.mp3','curiosidade_19.mp3','curiosidade_20.mp3'],
    noticia: ['noticia_01.mp3','noticia_02.mp3','noticia_03.mp3','noticia_04.mp3','noticia_05.mp3','noticia_06.mp3','noticia_07.mp3','noticia_08.mp3','noticia_09.mp3','noticia_10.mp3','noticia_11.mp3','noticia_12.mp3'],
    dica: ['dica_01.mp3','dica_02.mp3','dica_03.mp3','dica_04.mp3','dica_05.mp3','dica_06.mp3','dica_07.mp3'],
    programacao: ['programacao_01.mp3','programacao_02.mp3','programacao_03.mp3','programacao_04.mp3','programacao_05.mp3']
};

function escHtml(s) {
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
}

// ========== AUTH ==========
var dashboardInterval = null;
var authChecked = false;

function getStoredData() {
    try {
        var d = JSON.parse(localStorage.getItem(STORAGE_KEY));
        return d || {};
    } catch(e) { return {}; }
}

function saveData(data) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch(e) {}
}

function isLoggedIn() {
    var d = getStoredData();
    return d.loggedIn === true;
}

function login() {
    var email = document.getElementById('loginEmail').value.trim();
    var pass = document.getElementById('loginPassword').value;
    if (!email || !pass) {
        document.getElementById('loginError').textContent = 'Preencha email e senha!';
        return;
    }
    if (email !== ADMIN_EMAIL) {
        document.getElementById('loginError').textContent = 'Email nao autorizado!';
        return;
    }
    document.getElementById('loginBtn').disabled = true;
    document.getElementById('loginBtn').innerHTML = '<i class="fas fa-spinner fa-spin"></i> Entrando...';
    firebase.auth().signInWithEmailAndPassword(email, pass).then(function() {
        document.getElementById('loginBtn').disabled = false;
        document.getElementById('loginBtn').innerHTML = '<i class="fas fa-sign-in-alt"></i> Entrar';
        var data = getStoredData();
        data.loggedIn = true;
        data.loginTime = new Date().toISOString();
        saveData(data);
        addLog('Admin fez login', 'info');
        showAdminPanel();
    }).catch(function(err) {
        document.getElementById('loginBtn').disabled = false;
        document.getElementById('loginBtn').innerHTML = '<i class="fas fa-sign-in-alt"></i> Entrar';
        var msg = 'Erro ao entrar!';
        if (err.code === 'auth/user-not-found') msg = 'Usuario nao encontrado!';
        else if (err.code === 'auth/wrong-password') msg = 'Senha incorreta!';
        else if (err.code === 'auth/invalid-email') msg = 'Email invalido!';
        else if (err.code === 'auth/too-many-requests') msg = 'Muitas tentativas. Aguarde!';
        document.getElementById('loginError').textContent = msg;
        document.getElementById('loginPassword').value = '';
        document.getElementById('loginPassword').focus();
        addLog('Tentativa de login falhou: ' + err.code, 'error');
    });
}

function logout() {
    if (dashboardInterval) { clearInterval(dashboardInterval); dashboardInterval = null; }
    firebase.auth().signOut().catch(function(){});
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
    if (dashboardInterval) clearInterval(dashboardInterval);
    dashboardInterval = setInterval(function() { renderNextTracks(); }, 10000);
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
    try { localStorage.setItem(LOG_KEY, JSON.stringify(logs)); } catch(e) {}
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
var PLAYLIST_VERSION = 4;

function getPlaylist() {
    var data = getStoredData();
    if (!data.playlistVersion || data.playlistVersion < PLAYLIST_VERSION) {
        data.playlist = DEFAULT_PLAYLIST.slice();
        data.playlistVersion = PLAYLIST_VERSION;
        saveData(data);
    }
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
            '<td><span class="file-badge">' + escHtml(pl[i].file) + '</span></td>' +
            '<td>' + escHtml(pl[i].song) + '</td>' +
            '<td style="color:var(--text-muted);">' + escHtml(pl[i].artist) + '</td>' +
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
    if (!pl || pl.length === 0) {
        var c = document.getElementById('nextTracks');
        if (c) c.innerHTML = '<p style="color:var(--text-muted);padding:10px;">Nenhuma musica na playlist.</p>';
        return;
    }
    var AVG_SONG = 240;
    var SONGS_PER_BLOCO = 3;
    var BLOCO_DURATION = 120;
    var CYCLE_DURATION = AVG_SONG * SONGS_PER_BLOCO + BLOCO_DURATION;
    var EPOCH = new Date('2025-01-01T00:00:00-03:00').getTime();
    var elapsed = (Date.now() - EPOCH) / 1000;
    if (elapsed < 0) elapsed = 0;
    var fullCycles = Math.floor(elapsed / CYCLE_DURATION);
    var idx = (fullCycles * SONGS_PER_BLOCO) % pl.length;

    var container = document.getElementById('nextTracks');
    var html = '';
    for (var i = 0; i < 10; i++) {
        var trackIdx = (idx + i) % pl.length;
        var t = pl[trackIdx];
        if (!t) continue;
        var isCurrent = i === 0;
        html += '<div class="track-item' + (isCurrent ? ' current' : '') + '">' +
            '<div class="track-num">' + (i + 1) + '</div>' +
            '<div class="track-details">' +
            '<div class="track-song">' + escHtml(t.song) + '</div>' +
            '<div class="track-artist">' + escHtml(t.artist) + '</div>' +
            '</div>' +
            (isCurrent ? '<div class="track-live"><i class="fas fa-volume-up"></i> AO VIVO</div>' : '') +
            '</div>';
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
    document.getElementById('cfgLocDuration').value = cfg.locDuration || 30;
    document.getElementById('cfgVoice').value = cfg.voice || 'pt-BR-FranciscaNeural';
    document.getElementById('cfgStreamUrl').value = cfg.streamUrl || '';
    document.getElementById('cfgStreamMount').value = cfg.streamMount || '/piresfm';
    document.getElementById('cfgStreamBitrate').value = cfg.streamBitrate || '96';
    document.getElementById('cfgGithubToken').value = cfg.githubToken || '';
}

function saveGithubToken() {
    var data = getStoredData();
    if (!data.config) data.config = {};
    data.config.githubToken = document.getElementById('cfgGithubToken').value;
    saveData(data);
    document.getElementById('githubSyncStatus').innerHTML = '<span style="color:var(--success);">Token salvo!</span>';
    addLog('Token GitHub salvo', 'info');
}

function syncPlaylistToGithub() {
    var statusEl = document.getElementById('githubSyncStatus');
    var data = getStoredData();
    var token = data.config ? data.config.githubToken : '';
    if (!token) {
        statusEl.innerHTML = '<span style="color:var(--error);">Configure o GitHub Token primeiro!</span>';
        return;
    }
    var pl = getPlaylist();
    var content = btoa(unescape(encodeURIComponent(JSON.stringify(pl, null, 2))));
    statusEl.innerHTML = '<span>Sincronizando...</span>';
    addLog('Sincronizando playlist com GitHub...', 'info');

    // Primeiro obtem o SHA atual do arquivo
    fetch('https://api.github.com/repos/jomarpiresribeiro39-eng/pires-fm-site/contents/playlist.json', {
        headers: { 'Authorization': 'Bearer ' + token }
    }).then(function(r) {
        if (!r.ok && r.status !== 404) throw new Error('Erro ao obter SHA: ' + r.status);
        return r.status === 404 ? null : r.json();
    }).then(function(existing) {
        var sha = existing ? existing.sha : null;
        var body = {
            message: 'Playlist atualizada pelo admin',
            content: content,
            branch: 'main'
        };
        if (sha) body.sha = sha;
        return fetch('https://api.github.com/repos/jomarpiresribeiro39-eng/pires-fm-site/contents/playlist.json', {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    }).then(function(r) {
        if (!r.ok) throw new Error('Erro ao salvar: ' + r.status);
        statusEl.innerHTML = '<span style="color:var(--success);">Playlist sincronizada com sucesso! Pode levar 1-2 min para todos verem.</span>';
        addLog('Playlist sincronizada com GitHub', 'success');
    }).catch(function(err) {
        statusEl.innerHTML = '<span style="color:var(--error);">Erro: ' + err.message + '</span>';
        addLog('Erro ao sincronizar playlist: ' + err.message, 'error');
    });
}

function saveConfig() {
    var data = getStoredData();
    data.config = data.config || {};
    data.config.avgSong = parseInt(document.getElementById('cfgAvgSong').value);
    data.config.locEvery = parseInt(document.getElementById('cfgLocEvery').value);
    data.config.locDuration = parseInt(document.getElementById('cfgLocDuration').value);
    data.config.voice = document.getElementById('cfgVoice').value;
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
    var newPass = document.getElementById('cfgNewPass').value;
    var confirmPass = document.getElementById('cfgConfirmPass').value;

    if (newPass.length < 6) {
        alert('A nova senha deve ter pelo menos 6 caracteres!');
        return;
    }
    if (newPass !== confirmPass) {
        alert('As senhas não conferem!');
        return;
    }
    var user = firebase.auth().currentUser;
    if (!user) {
        alert('Voce precisa estar logado para alterar a senha!');
        return;
    }
    user.updatePassword(newPass).then(function() {
        document.getElementById('cfgOldPass').value = '';
        document.getElementById('cfgNewPass').value = '';
        document.getElementById('cfgConfirmPass').value = '';
        addLog('Senha do admin alterada', 'warning');
        alert('Senha alterada com sucesso!');
    }).catch(function(err) {
        alert('Erro ao alterar senha: ' + err.message);
    });
}

// ========== PEDIDOS ==========
function getRequests() {
    try { return JSON.parse(localStorage.getItem(REQUESTS_KEY)) || []; } catch(e) { return []; }
}

function saveRequests(reqs) {
    try { localStorage.setItem(REQUESTS_KEY, JSON.stringify(reqs)); } catch(e) {}
    renderPedidos();
}

function renderPedidos() {
    var container = document.getElementById('pedidosContainer');
    if (!container) return;
    var reqs = getRequests();
    if (reqs.length === 0) {
        container.innerHTML = '<p class="empty-logs">Nenhum pedido recebido ainda.</p>';
        return;
    }
    var html = '<div class="pedidos-table"><table class="manage-table"><thead><tr><th>Data</th><th>Nome</th><th>Musica</th><th>Artista</th><th>Mensagem</th><th>Status</th><th>Acoes</th></tr></thead><tbody>';
    for (var i = reqs.length - 1; i >= 0; i--) {
        var r = reqs[i];
        var statusClass = r.played ? 'pedido-played' : r.approved ? 'pedido-approved' : 'pedido-pending';
        var statusText = r.played ? 'Tocada' : r.approved ? 'Aprovada' : 'Pendente';
        html += '<tr class="' + statusClass + '">' +
            '<td style="font-size:0.78rem;color:var(--text-muted);">' + escHtml(r.date) + '</td>' +
            '<td><strong>' + escHtml(r.name) + '</strong></td>' +
            '<td>' + escHtml(r.song) + '</td>' +
            '<td>' + escHtml(r.artist) + '</td>' +
            '<td style="font-size:0.78rem;color:var(--text-muted);max-width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">' + escHtml(r.message || '-') + '</td>' +
            '<td><span class="pedido-badge ' + statusClass + '">' + statusText + '</span></td>' +
            '<td class="actions">' +
            (!r.played ? '<button class="btn btn-sm btn-primary" onclick="approveRequest(' + i + ')"><i class="fas fa-check"></i></button>' : '') +
            (!r.played ? '<button class="btn btn-sm btn-secondary" onclick="markPlayed(' + i + ')"><i class="fas fa-play"></i></button>' : '') +
            '<button class="btn btn-sm btn-danger" onclick="deleteRequest(' + i + ')"><i class="fas fa-trash"></i></button>' +
            '</td></tr>';
    }
    html += '</tbody></table></div>';
    container.innerHTML = html;
    document.getElementById('statTracks').textContent = getPlaylist().length;
}

function approveRequest(idx) {
    var reqs = getRequests();
    if (reqs[idx]) { reqs[idx].approved = true; saveRequests(reqs); addLog('Pedido aprovado: ' + reqs[idx].song + ' - ' + reqs[idx].name, 'info'); }
}

function markPlayed(idx) {
    var reqs = getRequests();
    if (reqs[idx]) { reqs[idx].played = true; reqs[idx].approved = true; saveRequests(reqs); addLog('Pedido marcado como tocado: ' + reqs[idx].song, 'warning'); }
}

function deleteRequest(idx) {
    if (!confirm('Remover este pedido?')) return;
    var reqs = getRequests();
    if (reqs[idx]) { addLog('Pedido removido: ' + reqs[idx].song + ' - ' + reqs[idx].name, 'warning'); reqs.splice(idx, 1); saveRequests(reqs); }
}

function approveAllPending() {
    var reqs = getRequests();
    var count = 0;
    for (var i = 0; i < reqs.length; i++) { if (!reqs[i].approved && !reqs[i].played) { reqs[i].approved = true; count++; } }
    if (count > 0) { saveRequests(reqs); addLog(count + ' pedidos aprovados em massa', 'info'); }
    else { alert('Nenhum pedido pendente.'); }
}

function exportRequests() {
    var reqs = getRequests();
    var json = JSON.stringify(reqs, null, 2);
    var blob = new Blob([json], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a'); a.href = url; a.download = 'piresfm_pedidos.json'; a.click();
    URL.revokeObjectURL(url);
    addLog('Pedidos exportados (' + reqs.length + ')', 'info');
}

// ========== LOGS ==========
function clearLogs() {
    if (!confirm('Limpar todos os logs?')) return;
    localStorage.removeItem(LOG_KEY);
    renderLogs();
}

// ========== STREAM CONFIG ==========
function saveStreamConfig() {
    var data = getStoredData();
    var cfg = data.config || {};
    cfg.streamUrl = document.getElementById('cfgStreamUrl').value.trim();
    cfg.streamMount = document.getElementById('cfgStreamMount').value.trim();
    cfg.streamBitrate = document.getElementById('cfgStreamBitrate').value;
    data.config = cfg;
    saveData(data);
    addLog('Configuração de stream salva', 'info');
    alert('Configuração de stream salva! Os ouvintes poderão usar o stream do Caster.fm quando configurado.');
}

function loadStreamConfig() {
    var data = getStoredData();
    var cfg = data.config || {};
    if (document.getElementById('cfgStreamUrl')) document.getElementById('cfgStreamUrl').value = cfg.streamUrl || '';
    if (document.getElementById('cfgStreamMount')) document.getElementById('cfgStreamMount').value = cfg.streamMount || '/piresfm';
    if (document.getElementById('cfgStreamBitrate')) document.getElementById('cfgStreamBitrate').value = cfg.streamBitrate || '96';
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

    var titles = { dashboard: 'Dashboard', playlist: 'Playlist', locucoes: 'Locuções', config: 'Configurações', pedidos: 'Pedidos', logs: 'Logs' };
    document.getElementById('pageTitle').textContent = titles[tabName] || tabName;

    if (tabName === 'logs') renderLogs();
    if (tabName === 'pedidos') renderPedidos();
}

// ========== INIT ==========

document.addEventListener('DOMContentLoaded', function() {
    // Login
    document.getElementById('loginBtn').addEventListener('click', login);
    document.getElementById('loginPassword').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') login();
    });
    document.getElementById('loginEmail').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') document.getElementById('loginPassword').focus();
    });

    // Logout
    document.getElementById('logoutBtn').addEventListener('click', function(e) {
        e.preventDefault();
        logout();
    });

    // Auth state
    firebase.auth().onAuthStateChanged(function(user) {
        if (user && user.email === ADMIN_EMAIL && isLoggedIn()) {
            showAdminPanel();
        } else if (user && user.email === ADMIN_EMAIL) {
            var data = getStoredData();
            data.loggedIn = true;
            data.loginTime = new Date().toISOString();
            saveData(data);
            showAdminPanel();
        }
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

    // Test locucao
    document.getElementById('testLocucaoBtn').addEventListener('click', function() {
        var tipos = Object.keys(LOCUCAO_FILES);
        var tipo = tipos[Math.floor(Math.random() * tipos.length)];
        var arquivos = LOCUCAO_FILES[tipo];
        if (!arquivos || arquivos.length === 0) { alert('Nenhum arquivo de locucao encontrado para ' + tipo); return; }
        var arquivo = arquivos[Math.floor(Math.random() * arquivos.length)];
        var url = 'locucoes_finais/' + encodeURIComponent(arquivo);
        var a = new Audio(url);
        a.play().then(function() {
            addLog('Testando locucao: ' + tipo + '/' + arquivo, 'info');
        }).catch(function(e) {
            alert('Erro ao reproduzir: ' + e.message);
        });
    });

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

    // Stream config
    loadStreamConfig();

    // Logs
    document.getElementById('clearLogsBtn').addEventListener('click', clearLogs);

    // Pedidos
    renderPedidos();

    // Initial renders
    renderManagePlaylist();
    renderLocucoes();
    loadConfig();
    renderLogs();
});

console.log('%c Pires FM Admin %c Painel Administrativo ',
    'background:#e63946;color:white;padding:5px 10px;border-radius:4px 0 0 4px;font-weight:bold',
    'background:#1d3557;color:white;padding:5px 10px;border-radius:0 4px 4px 0');
