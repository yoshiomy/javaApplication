// 現在日時を表示する関数
function displayCurrentDateTime() {
    const now = new Date();
    if (document.getElementById("datetime")) {
        document.getElementById("datetime").innerText = now.toLocaleString();
    }
}

// 出勤・退勤ボタンを押した際の確認アラート
function confirmAction(action) {
    const confirmMessage = action === '出勤' ? '出勤しますか？' : '退勤しますか？';
    if (confirm(confirmMessage)) {
        alert(action + "が記録されました。");
    }
}

// ページ読み込み時に現在日時を表示
window.onload = function() {
    displayCurrentDateTime();
};
