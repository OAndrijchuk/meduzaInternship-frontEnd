 import * as dotenv from 'dotenv';
import styles from './page.module.css'

dotenv.config();

export default async function Home() {
   console.log(`"App started on port: ${process.env.PORT}"`);
  return (
    <main className={styles.main}>
    
      <div className={styles.center}>
        <h1>Welcome to meduzzen-internship-front app</h1>
      </div>
     
    </main>
  )
}
