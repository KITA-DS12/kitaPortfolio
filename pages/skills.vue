<template>
  <div class="container">
    <div class="cards">
      <SkillCard
        name="Python"
        :level="4"
        :details="[
          {
            category: 'Web Development',
            tags: ['FastAPI', 'Django', 'Flask', 'Streamlit'],
          },
          {
            category: 'Data Science',
            tags: [
              'PyTorch',
              'TensorFlow',
              'Keras',
              'scikit-learn',
              'Pandas',
              'NumPy',
              'ONNX',
              'SciPy',
              'Matplotlib',
              'Seaborn',
              'NetworkX',
            ],
          },
          {
            category: 'Natural Language Processing',
            tags: [
              'transformers',
              'MeCab',
              'spaCy',
              'NLTK',
              'Janome',
              'GiNZA',
              'Gensim',
            ],
          },
          {
            category: 'Computer Vision',
            tags: ['OpenCV', 'Pillow', 'MediaPipe', 'OpenPose', 'Kapao'],
          },
          {
            category: 'Web Scraping',
            tags: ['Beautiful Soup', 'Selenium', 'Requests'],
          },
        ]"
        img="python"
      />
      <SkillCard
        name="JavaScript / TypeScript"
        :level="3"
        :details="[
          {
            category: 'Web Development',
            tags: ['Vue.js', 'Nuxt.js', 'React', 'Express', 'Nest.js'],
          },
          {
            category: 'Scripting',
            tags: ['Google Apps Script'],
          },
        ]"
        img="typescript"
      />
      <SkillCard
        name="Go"
        :level="2"
        :details="[
          {
            category: 'Web Development',
            tags: ['Gin', 'Echo', 'Gorilla', 'Beego', 'Fiber'],
          },
          {
            category: 'Data Science',
            tags: ['TensorFlow', 'ONNX'],
          },
          {
            category: 'Natural Language Processing',
            tags: ['Kagome'],
          },
          {
            category: 'Computer Vision',
            tags: ['GoCV'],
          },
        ]"
        img="go"
      />
      <SkillCard
        name="Editor"
        :level="5"
        :details="[
          {
            category: '-',
            tags: ['Vim', 'Neovim'],
          },
        ]"
        img="vim"
        :others="true"
      />
      <SkillCard
        name="Other Languages"
        :level="0"
        :details="[
          {
            category: '-',
            tags: ['PHP', 'HTML', 'CSS', 'Vim Script', 'C', 'C#', 'Swift'],
          },
        ]"
        img="php"
        :others="true"
      />
      <SkillCard
        name="Infrastructure"
        :level="0"
        :details="[
          {
            category: '-',
            tags: ['AWS', 'GCP', 'Docker', 'Docker Compose'],
          },
        ]"
        img="ec2"
        :others="true"
      />
      <SkillCard
        name="Others"
        :level="0"
        :details="[
          {
            category: '-',
            tags: ['Git', 'GitHub', 'GitHub Actions', 'CircleCI', 'Jenkins'],
          },
        ]"
        img="git"
        :others="true"
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
