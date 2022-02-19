import React from 'react'
import Image from 'next/image'
import styles from './invite.module.scss'

export const Invite: React.FC = () => (
  <main id="invite" className={styles.invite}>
    <div className={styles.container}>
      <Image
        src="/img/welcome_cats.svg"
        alt="welcome cats illustration"
        width={256}
        height={256}
      />
      <div className={styles.description}>
        <h1 className={styles.title}>作業スペースに参加する</h1>
        <a
          href="https://join.sagyo.space"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={styles.subtitle}>JOIN.SAGYO.SPACE</h2>
        </a>
      </div>
    </div>
  </main>
)
