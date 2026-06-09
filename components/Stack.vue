<template>
  <section class="section">
    <div class="container">
      <h2 class="section-title">技術スタック</h2>

      <div class="stack-group">
        <h3 class="stack-title">普段使う</h3>
        <p>
          TypeScript（React, Vue）/ Go / Python / Google Cloud / AWS / Terraform
        </p>
      </div>

      <div class="stack-group">
        <h3 class="stack-title">AI 開発支援</h3>
        <p>
          メインに使うのは Claude Code、Devin、Devin Desktop（旧 Windsurf）。
        </p>
      </div>

      <p class="note">
        各案件で実際に使った技術は、「これまでに取り組んだ仕事」と「個人開発」
        の各項目に併記している。
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.stack-group {
  margin-bottom: 1.5rem;
}

.stack-title {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-muted);
}

.note {
  margin-top: 1.5rem;
  font-size: 0.85rem;
  color: var(--color-muted);
}
</style>
