import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import googleImg from '../../assets/images/google-icon.svg'

import './styles.scss'

export function Home() {
   return (
      <div id='page-auth'>
         <aside>
          <img src={illustrationImg} alt="ilustração com um icone de pessoa atras de icones de perguntas e respostas" />
          <strong>Crie salas de Q&amp;A ao-vivo</strong>
          <p>Tire as duvidas da sua audiencia em tempo-real</p>
         </aside>
         <main>
            <div>
               <img src={logoImg} alt="Perguntei" />
               <button>
                  <img src={googleImg} alt="logo do Google" />
                  Faça seu login com o Google
               </button>
               <div>Ou entre em uma sala já criada</div>
               <form action="">
                  <input type="text" placeholder='Digite o código da sala'/>
                  <button type='submit'>Entre na sala</button>
               </form>
            </div>
         </main>
      </div>
   )
}