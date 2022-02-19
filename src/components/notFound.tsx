import styles from './notFound.module.scss'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const PageNotFound: React.FC = () => (
  <main className={styles.notFound}>
    <div className={styles.container}>
      <Image
        src="/img/not_found.svg"
        alt="404 illustration"
        width={256}
        height={256}
      />

      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>
        <p>お探しのページは見つかりませんでした</p>
        <p>
          <Link href="/">トップページへ</Link>
        </p>
      </h2>
    </div>
  </main>
)
