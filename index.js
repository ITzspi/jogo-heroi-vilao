const {createApp} = Vue

createApp( {
    data() {
        return {
            heroi: {vida: 100},
            vilao: {vida: 100},
            logAcoes: []
        }
    },
    methods: {
        atacar(isHeroi) {
            const alvo = isHeroi ? this.vilao : this.heroi;
            const dano = 10;
            
            alvo.vida -= dano;
            const acao = `${isHeroi ? 'Malenia' : 'Radahn'} Atacou e causou ${dano} de dano.`;
            this.logAcao(acao);
            
            if (alvo.vida <= 0) {
                this.logAcao(`${isHeroi ? 'Malenia' : 'Radahn'} Venceu!`);
            }
            else {
                this.acaoVilao();
            }
        },
        defender(isHeroi) {
            const personagem = isHeroi ? this.heroi : this.vilao;
            const danoReduzido = 5;
            personagem.vida -= danoReduzido;
            const acao = `${isHeroi ? 'Malenia' : 'Radahn'} Se defendeu e reduziu ${danoReduzido} de dano.`;
            this.logAcao(acao);
        },
        usarEstus(isHeroi) {
            const personagem = isHeroi ? this.heroi : this.vilao;
            const cura = 20;
            personagem.vida += cura;
            const acao = `${isHeroi ? 'Malenia' : 'Radahn'} Tomou um Estus e recuperou ${cura} de vida.`;
            this.logAcao(acao);
        },
        esquivar(isHeroi) {
            const acao = `${isHeroi ? 'Malenia' : 'Radahn'} Esquivou do ataque.`;
            this.logAcao(acao);
        },
        acaoVilao() {
            const acoes = ['atacar', 'defender', 'usarEstus', 'esquivar', 'atacar', 'atacar'];
            const acaoAleatoria = acoes[Math.floor(Math.random() * acoes.length)];
            this[acaoAleatoria](false);
        },
        logAcao(acao) {
            this.logAcoes.push(acao);
        }
    }
}).mount("#app");