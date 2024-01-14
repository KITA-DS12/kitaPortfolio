<template>
  <div class="container">
    <div class="content">
      <SkillCard name="Python" :level="4" :details="[
        {
          category: 'Web Development',
          tags: ['FastAPI', 'Django', 'Flask', 'Streamlit', 'Requests'],
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
          tags: ['OpenCV', 'Pillow', 'MediaPipe'],
        },
        {
          category: 'Web Scraping',
          tags: ['Beautiful Soup', 'Selenium'],
        },
      ]" img="python" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 80vh;
  display: flex;
  justify-content: center;
}
</style>
