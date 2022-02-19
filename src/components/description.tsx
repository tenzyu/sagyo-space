import React from 'react'
import styles from './description.module.scss'
import Image from 'next/image'

export const Description: React.FC = () => (
  <main id="top" className={styles.description}>
    <section className={styles.grid}>
      <Image
        className={styles.image}
        src="/img/smart_resize.svg"
        width={256}
        height={256}
        alt="smart resize illustration"
      />
      <div>
        <h2 className={styles.title}>スマートなチャンネル管理</h2>
        <div className={styles.value}>
          <p>
            もしあなたが Discord
            サーバーを探検していれば理解してくれるでしょうが、あらゆる Discord
            サーバーでは、チャンネルが煩雑になりがちです。
          </p>
          <p>
            それではチャンネル全てを見るだけで疲れてしまいますし、仮に見ていなければスレ違いを起こしてしまうかもしれません。
          </p>
          <p>
            しかし&quot;作業スペース&quot;では、必要なときにメンバーが作業通話用のスペースを作成でき、無人になれば自動で削除する仕組みがあります。
          </p>
          <p>
            これにより、余計なチャンネル・ログが存在しない歩きやすいサーバーとなっています。
          </p>
        </div>
      </div>
    </section>
    <section className={styles.grid}>
      <Image
        className={styles.image}
        src="/img/real_time_collaboration.svg"
        width={256}
        height={256}
        alt="real time collaboration illustration"
      />
      <div>
        <h2 className={styles.title}>作業通話に特化</h2>
        <div className={styles.value}>
          <p>
            もしあなたが作業通話サーバーを試してきたなら理解してくれるでしょうが、多くの作業通話サーバーは、いくつかのＶＣを置いているだけです。
          </p>
          <p>
            それでは、例えば「勉強」とついたＶＣでは勉強しかできませんし、そうなれば自分の作業に適しているか不安な場所しか存在しないことすらあります。
          </p>
          <p>
            しかし&quot;作業スペース&quot;では、作業通話用のスペースを作成した人
            <u>だけ</u>
            がＶＣの名前や人数制限を編集できる仕組みがあります。
          </p>
          <p>
            作成側がそれらを活用することで、参加側の不安を解消したり、同じジャンルの人々で作業することが可能になります。
          </p>
        </div>
      </div>
    </section>
    <section className={styles.grid}>
      <Image
        className={styles.image}
        src="/img/moving_forward.svg"
        width={256}
        height={256}
        alt="moving forward illustration"
      />
      <div>
        <h2 className={styles.title}>その他の方針</h2>
        <div className={styles.value}>
          <p>
            作業通話を中心とした利用を促すため、他のサーバーによくあるようなチャンネルのほとんどを作成していません。交流できるテキストチャンネルをひとつまでに制限しています。
          </p>
          <p>
            &quot;作業スペース&quot;関連のプログラムは GitHub
            にて全て公開します。ホームページは
            <a
              href="https://github.com/tenzyu/sagyo-space"
              target="_blank"
              rel="noopener noreferrer"
            >
              こちら
            </a>
            、Discord BOT は
            <a
              href="https://github.com/tenzyu/sagyo-space-bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              こちら
            </a>
            から閲覧できます。
          </p>
        </div>
      </div>
    </section>
    <section className={styles.grid}>
      <Image
        className={styles.image}
        src="/img/progressive_app.svg"
        width={256}
        height={256}
        alt="progressive app illustration"
      />
      <div>
        <h2 className={styles.title}>プラットフォームについて</h2>
        <div className={styles.value}>
          <p>
            もしもあなたがまだ Discord
            を試していないときのためにリンクを用意しました。
          </p>
          <p>
            繰り返しますが、作業スペースは Discord
            上の作業通話コミュニティサーバーです。 まだ Discord
            を利用していない方は、
            <a
              href="https://discord.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              こちらのページ
            </a>
            でインストールとアカウントを作成してください。
          </p>
          <p>セットアップが済んだら、下の参加ボタンを押してくださいね。</p>
        </div>
      </div>
    </section>
  </main>
)
