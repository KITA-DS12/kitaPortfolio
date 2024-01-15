<template>
  <div class="container">
    <div class="cards">
      <SkillCard
        name="Python"
        :level="4"
        :tags="['FastAPI', 'Django', 'Flask', 'Streamlit', 'Tornado']"
        img="python"
      />
      <SkillCard
        name="JavaScript / TypeScript"
        :level="3"
        :tags="['Vue.js', 'Nuxt.js', 'React', 'Express', 'Nest.js']"
        img="typescript"
      />
      <SkillCard
        name="Go"
        :level="3"
        :tags="['Gin', 'Echo', 'Gorilla', 'Beego', 'Fiber']"
        img="go"
      />
      <SkillCard
        name="HTML / CSS"
        :level="3"
        :tags="['Sass', 'Bootstrap', 'Tailwind CSS']"
        img="html5"
      />
      <SkillCard name="PHP" :level="2" :tags="['Symfony']" img="php" />
      <SkillCard
        name="Other Languages"
        :level="1"
        :tags="[
          'C',
          'C#',
          'C++',
          'Google Apps Script',
          'Shell Script',
          'Swift',
        ]"
        img="c++"
      />
      <SkillCard
        name="SQL / Database"
        :level="3"
        :tags="['MySQL', 'PostgreSQL', 'SQLite']"
        img="postgresql"
      />
      <SkillCard name="Editor" :level="5" :tags="['Vim', 'Neovim']" img="vim" />
      <SkillCard
        name="Amazon Web Services"
        :level="2"
        :tags="[
          'API Gateway',
          'CloudFormation',
          'CloudFront',
          'CloudWatch',
          'EC2',
          'Elastic Container Registry',
          'Elastic Container Service',
          'EventBridge',
          'Lambda',
          'RDS',
          'Simple Notification Service',
          'Simple Storage Service',
          'Simple Queue Service',
          'Route 53',
        ]"
        img="ec2"
      />
      <SkillCard
        name="Google Cloud Platform"
        :level="2"
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
