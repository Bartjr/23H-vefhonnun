function toggleTeamNames() {
    const teamNames = document.getElementById('teamNames');
    teamNames.style.display = (teamNames.style.display === 'block') ? 'none' : 'block';
}

function toggleMemberInfo(memberName) {
    const memberInfo = document.getElementById(`${memberName}Info`);
    memberInfo.classList.toggle('active');
}

function showMemberInfo(memberName) {
    const memberInfo = document.getElementById(`${memberName}Info`);


    // Slide out animation
    memberInfo.style.height = 'auto';
    const height = memberInfo.clientHeight + 'px';
    memberInfo.style.height = '0';
    setTimeout(() => {
        memberInfo.style.height = height;
    }, 0);
}
