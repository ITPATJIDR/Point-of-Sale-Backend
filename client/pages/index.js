import Head from 'next/head'
import {useState} from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Sidebar from '../Components/Parent'
import Link from 'next/link'
import LoginPage from '../Components/LoginPage'

export default function Home({Menu}) {
  const [isLogin, setLogin] = useState(false)
  return (
    <div className={styles.container}>
      <Head>
        <title>POS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLogin ?

      <Sidebar>
        <div className="Menu-List">
          {Menu.map((item) =>{
            return (
              <Link href="/">
                <div className="Menu-Choice">
                  <div className="Menu-Image">
                    <Image src="https://cdn.mygingergarlickitchen.com/images/800px/800px-Food-Styling-indian-roti-recipe-phulka-chapati-Pinterest.jpg" width="200" height="200" alt="Roti"/>
                  </div>
                    <div className="Menu-Name">
                      <p key={item._id}>{item.MenuName}</p>
                    </div>
                </div>
              </Link>
            )
          })}
        </div>
      </Sidebar>

      : <LoginPage setLogin={setLogin} isLogin={isLogin}/> }

    </div>
  )
}

export const getServerSideProps = async () =>{
      const  res = await fetch("http://localhost:5000/menu/getAllMenu",{method:'GET'}) 
      const data = await res.json()
      return {
        props : {Menu : data}
      } 
} 
