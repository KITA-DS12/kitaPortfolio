<template>
  <div class="container">
    <div class="cards">
      <SkillCard
        name="Python"
        :level="4"
        :description="[
          '主にWebアプリケーションのバックエンド開発に使用。',
          '特にFastAPIやDjangoを用いることが多い。',
          'その他にも、データサイエンス領域にて使用。',
          '特に自然言語処理やコンピュータビジョンでの使用経験あり。',
        ]"
        :tags="['FastAPI', 'Django', 'Flask', 'Streamlit', 'Tornado']"
        img="python"
      />
      <SkillCard
        name="JavaScript / TypeScript"
        :level="3"
        :description="[
          '主にWebアプリケーションのフロントエンド開発に使用。',
          '業務では、Vue.jsを用いることが多い。',
          'その他にも、バッチ処理やGoogle Apps Scriptの開発にも使用。',
        ]"
        :tags="['Vue.js', 'Nuxt.js', 'React', 'Express', 'Nest.js']"
        img="typescript"
      />
      <SkillCard
        name="Go"
        :level="3"
        :description="[
          '主にWebアプリケーションのバックエンド開発に使用。',
          '業務では、net/httpを用いることが多い。',
          'その他にも、バッチ処理やCLIツールの開発にも使用。',
        ]"
        :tags="['net/http', 'Gin', 'Echo', 'Gorilla', 'Beego', 'Fiber']"
        img="go"
      />
      <SkillCard
        name="HTML / CSS"
        :level="3"
        :description="['Webアプリケーションのフロントエンド開発に使用。']"
        :tags="['Sass', 'Bootstrap', 'Tailwind CSS']"
        img="html5"
      />
      <SkillCard
        name="PHP"
        :level="2"
        :description="[
          '業務にて、Symfonyを用いたWebアプリケーションの開発に使用。',
        ]"
        :tags="['Symfony']"
        img="php"
      />
      <SkillCard
        name="Other Languages"
        :level="1"
        :description="[
          '趣味でC#・Unityを用いたゲーム開発やSwiftを用いたiOSアプリ開発などの経験あり。',
        ]"
        :tags="['C', 'C#', 'C++', 'Shell Script', 'Swift']"
        img="c_plus"
      />
      <SkillCard
        name="SQL / Database"
        :level="3"
        :description="[
          'Webアプリケーション開発やデータサイエンス領域にて使用。',
        ]"
        :tags="['MySQL', 'PostgreSQL', 'SQLite']"
        img="postgresql"
      />
      <SkillCard
        name="Editor"
        :level="5"
        :description="[
          'AstroNvimをベースにしたNeovimをメインエディタとして使用。',
          'VSCodeを開いても、内部のターミナルでVimを開いてしまう程度には重症。',
        ]"
        :tags="['Vim', 'Neovim']"
        img="vim"
      />
      <SkillCard
        name="Amazon Web Services"
        :level="2"
        :description="[
          '業務や個人開発にて、Webアプリケーションのインフラ構築に使用。',
        ]"
        :tags="[
          'ACM',
          'CloudFront',
          'CloudWatch',
          'EC2',
          'ECR',
          'ECS',
          'EventBridge',
          'Lambda',
          'RDS',
          'SNS',
          'S3',
          'SQS',
          'Route 53',
        ]"
        img="ec2"
      />
      <SkillCard
        name="Google Cloud Platform"
        :level="2"
        :description="[
          '業務や個人開発にて、Webアプリケーションのインフラ構築に使用。',
        ]"
        :tags="[
          'App Engine',
          'BigQuery',
          'Cloud Functions',
          'Cloud Run',
          'Cloud SQL',
          'Cloud Storage',
          'Compute Engine',
          'Container Registry',
          'Firestore',
          'Firebase',
        ]"
        img="app_engine"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 80vh;
  display: flex;
  justify-content: center;

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
  }
}
</style>
