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




if (!customElements.get('loading-bar')) {
    class TG_LoadingBar extends HTMLElement {
        constructor() {
            super();
        }

        connectedCallback() {
            document.addEventListener('theme:loading:start', this._onLoadingStart.bind(this));
            document.addEventListener('theme:loading:end', this._onLoadingEnd.bind(this));

            this.addEventListener('transitionend', this._onTransitionEnd.bind(this));
        }

        _onLoadingStart() {
            this.classList.add('Visible');
            this.style.width = '40%';
        }

        _onLoadingEnd() {
            this.style.width = '100%';
            this.classList.add('Finished');
        }

        _onTransitionEnd(event) {
            if (event.propertyName === 'width' && this.classList.contains('Finished')) {
                this.classList.remove('Visible');
                this.classList.remove('Finished');
                this.style.width = '0';
            }
        }
    }
    
    customElements.define('loading-bar', TG_LoadingBar);
}