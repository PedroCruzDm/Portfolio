import { useEffect } from 'react'
import { personalInfo, contactInfo, socialLinks } from './data/personalInfo'
import { techStackData } from './data/techStack'
import { projectsData } from './data/projects'
import { timelineData } from './data/timeline'
import { ReadMore } from './components/ReadMore'
import './App.css'

const NIGHT_PLAYLIST = [
  '/assets/audio/A_Home_For_Flowers.mp3',
  '/assets/audio/Dear_Little.mp3',
]

const DAY_PLAYLIST = [
  '/assets/audio/White_Space.mp3',
]

const isNightTime = () => {
  const hour = new Date().getHours()
  return hour >= 17 || hour < 8
}

function App() {
  useEffect(() => {
    let currentAudio: HTMLAudioElement | null = null
    let currentTrackIndex = 0
    let timer: number | undefined
    let disposed = false
    let wasNight = isNightTime()

    const getCurrentPlaylist = () => {
      return isNightTime() ? NIGHT_PLAYLIST : DAY_PLAYLIST
    }

    const initAudio = async () => {
      if (disposed) return

      const playlist = getCurrentPlaylist()
      const trackSrc = playlist[currentTrackIndex]

      try {
        const response = await fetch(trackSrc, { method: 'HEAD' })
        if (!response.ok) {
          console.warn(`[audio] Arquivo nao encontrado: ${trackSrc}`)
          return
        }
      } catch {
        console.warn(`[audio] Nao foi possivel verificar o arquivo: ${trackSrc}`)
        return
      }

      if (disposed) return

      currentAudio = new Audio(trackSrc)
      currentAudio.volume = 0.25
      currentAudio.preload = 'auto'

      // Quando uma música terminar, tocar a próxima
      currentAudio.addEventListener('ended', playNextTrack, { once: true })
      
      // Inicia reprodução imediatamente
      playAudio()
    }

    const playNextTrack = async () => {
      if (disposed) return

      // Parar a música atual
      if (currentAudio) {
        currentAudio.pause()
        currentAudio.removeEventListener('ended', playNextTrack)
        currentAudio = null
      }

      // Próxima música no ciclo
      const playlist = getCurrentPlaylist()
      currentTrackIndex = (currentTrackIndex + 1) % playlist.length

      // Carregar e tocar a próxima
      await initAudio()
      if (currentAudio && (isNightTime() || !isNightTime())) {
        void (currentAudio as HTMLAudioElement).play().catch(() => {
          // Browser policy can block autoplay
        })
      }
    }

    const playAudio = () => {
      if (!currentAudio) return
      void (currentAudio as HTMLAudioElement).play().catch(() => {
        // Browser policy can block autoplay with sound until user interaction.
      })
    }

    const syncThemeAndAudio = () => {
      const isNight = isNightTime()

      if (isNight !== wasNight) {
        document.body.classList.toggle('night-mode', isNight)

        // Parar música anterior
        if (currentAudio) {
          currentAudio.pause()
          currentAudio.removeEventListener('ended', playNextTrack)
          currentAudio = null
        }

        // Resetar índice para a nova playlist
        currentTrackIndex = 0

        // Carregar e tocar a música do novo período
        void initAudio()

        wasNight = isNight
        return
      }

      if (!document.body.classList.contains('night-mode') && isNight) {
        document.body.classList.add('night-mode')
      } else if (document.body.classList.contains('night-mode') && !isNight) {
        document.body.classList.remove('night-mode')
      }
    }

    const unlockAudio = () => {
      if (!currentAudio) {
        void initAudio()
      } else {
        playAudio()
      }
      window.removeEventListener('pointerdown', unlockAudio)
      window.removeEventListener('keydown', unlockAudio)
      window.removeEventListener('touchstart', unlockAudio)
    }

    document.body.classList.toggle('night-mode', wasNight)
    void initAudio()

    timer = window.setInterval(syncThemeAndAudio, 15 * 1000)

    window.addEventListener('pointerdown', unlockAudio, { once: true })
    window.addEventListener('keydown', unlockAudio, { once: true })
    window.addEventListener('touchstart', unlockAudio, { once: true })

    return () => {
      disposed = true
      if (timer !== undefined) {
        window.clearInterval(timer)
      }
      window.removeEventListener('pointerdown', unlockAudio)
      window.removeEventListener('keydown', unlockAudio)
      window.removeEventListener('touchstart', unlockAudio)
      if (currentAudio) {
        currentAudio.pause()
        currentAudio.removeEventListener('ended', playNextTrack)
        currentAudio.currentTime = 0
      }
    }
  }, [])

  const statusLabel: Record<string, string> = {
    operational: 'Operacional',
    'in-development': 'Em desenvolvimento',
    completed: 'Concluido',
  }

  return (
    <main className="portfolio">
      <header className="hero" id="hero">
        <div className="hero-content">
          <p className="eyebrow">Portfolio 2026</p>
          <h1>{personalInfo.name}</h1>
          <p className="title">{personalInfo.title}</p>
          <p className="subtitle">{personalInfo.subtitle}</p>
          <p className="bio">{personalInfo.bio}</p>

          <a className="cta" href={`mailto:${contactInfo.email}`}>
            Fale comigo
          </a>

          <p className="email-visible">
            E-mail: <label className="email-label" aria-hidden="true">{contactInfo.email}</label>
          </p>

          <ul className="social-list" aria-label="Redes sociais">
            {socialLinks.map((link) => (
              <li key={link.platform}>
                <a href={link.url} target="_blank" rel="noreferrer">
                  <span className="social-badge" aria-hidden="true">
                    {link.platform.slice(0, 1)}
                  </span>
                  {link.platform}
                </a>
              </li>
            ))}
          </ul>

          <div className="contact-line">
            <span>{contactInfo.location}</span>
            <span className="dot" aria-hidden="true">
              •
            </span>
            <span>{contactInfo.availability}</span>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="js-icon" />
          <blockquote>{personalInfo.quote}</blockquote>
        </div>

      </header>

      <section className="section about-section" id="about">
        <div className="about-grid">
          <div className="about-copy">
            <p className="eyebrow">Sobre mim</p>
            <h2>Construo interfaces com foco em clareza, ritmo e evolução constante.</h2>
            <p>
              Sou um estudante que está há 3 anos explorando a área da tecnologia e me apaixonei por
              programação. Tenho muito interesse em entender como sistemas, sites e aplicativos
              funcionam por trás das telas.
            </p>
            <p>
              Busco evoluir constantemente, aprender cada vez mais e descobrir novas formas de criar
              soluções úteis, bem construídas e com propósito.
            </p>
          </div>

          <aside className="about-card card" aria-label="Resumo sobre mim">
            <h3>Como eu trabalho</h3>
            <ul className="about-points">
              <li>Ouço e planejo a ideia para entender bem o objetivo do projeto.</li>
              <li>Pesquiso e defino quais tecnologias fazem mais sentido para a solução.</li>
              <li>Desenvolvo a aplicação com foco em organização, funcionalidade e evolução constante.</li>
            </ul>
            <p className="about-note">{personalInfo.quote}</p>
          </aside>
        </div>
      </section>

      <section className="section" id="stack">
        <h2>Stack Tecnologica</h2>
        <div className="stack-grid">
          {techStackData.map((group) => (
            <article key={group.category} className="card stack-card">
              <h3>{group.category}</h3>
              <ul>
                {group.technologies.map((tech) => (
                  <li key={tech.name}>{tech.name}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <h2>Projetos</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <article key={project.id} className="card project-card">
              {project.image && (
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
              )}
              <p className={`status ${project.status}`}>
                {statusLabel[project.status] ?? project.status}
              </p>
              <h3>{project.title}</h3>
              <ReadMore text={project.description} charLimit={300} />
              <ul className="chips">
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              {project.githubUrl && project.githubUrl !== '#' && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-repo">
                  Visualizar Repositório
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="timeline">
        <h2>Jornada</h2>
        <ol className="timeline">
          {timelineData.map((item) => (
            <li key={item.year}>
              <p className="year">{item.year}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  )
}

export default App
