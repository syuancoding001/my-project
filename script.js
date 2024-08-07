function calculate() {
    // 获取用户选择和输入的值
    const packageType = document.getElementById('packageType').value;
    const duration = parseFloat(document.getElementById('duration').value);
    const isSmallLanguage = document.getElementById('isSmallLanguage').value;

    // 设置成本数值C
    let costPerMin;
    if (packageType === 'L1') {
        costPerMin = 10;
    } else if (packageType === 'L2') {
        costPerMin = 20;
    } else if (packageType === 'L3') {
        costPerMin = 50;
    }

    // 设置系数N
    const coefficient = (isSmallLanguage === 'yes') ? 1.2 : 1;

    // 计算结果Z和S
    let Z;
    if (duration <= 50) {
        Z = '不需要添加adds-on';
    } else {
        Z = Math.round((duration - 50) * coefficient);
    }
    const S = (costPerMin * duration * coefficient * 8).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // 输出结果
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p style="color: green; font-weight: bold;">您应当在TTCX选择哪个翻译剧套餐类型: ${packageType}</p>
        <p style="color: green; font-weight: bold;">您应当在adds-on处填写多少分钟: ${Z}</p>
        <p style="color: green; font-weight: bold;">如果想获得该项福利，60天内您需要为这部剧在TikTok上花费多少广告费（USD）: ${S} USD</p>
    `;
}

// 添加事件监听器以便在按下回车键时触发计算
document.getElementById('duration').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calculate();
    }
});