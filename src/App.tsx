import { Header } from './components/Header'
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from "./App.module.css"

import './global.css'

const posts: PostType[] = [
  {
      id: 1,
      author: {
          avatarUrl: `https://github.com/Guilherme549.png`,
          name: `Guilherme Francisco`,
          role: `CTO @ Microsoft`
      },
      content: [
        {type: `paragraph`, content : `Fala galeraa 👋`},
        {type: `paragraph`, content: `Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀`}, 
        {type: `link`, content: `jane.design/doctorcare`}    
      ],
      publishedAt: new Date(`2024-12-22 21:59:00`),
  },
  {
    id: 2,
    author: {
        avatarUrl: `https://github.com/diego3g.png`,
        name: `Diego Fernandes`,
        role: `Educator @ Rocketseat`
    },
    content: [
      {type: `paragraph`, content : `Fala galeraa 👋`},
      {type: `paragraph`, content: `Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀`}, 
      {type: `link`, content: `jane.design/doctorcare`}      
    ],
    publishedAt: new Date(`2024-12-21 21:59:00`),
},
]

function App() {

  return (
    <div>
      <Header></Header>

      <div className={styles.wrraper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
            <Post 
            key={post.id}
              post={post}
            />)
          })}
        </main>
        
      </div>
    </div>
    
  )
}

export default App
