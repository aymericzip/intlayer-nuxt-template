<script setup>
const { loadNamespace } = useLazyLocale();

// This will fetch locales/en/dashboard.json only when this page loads
await loadNamespace("dashboard");
</script>
