const billing = new URLSearchParams(window.location.search).get("billing");

if (billing === "1x15" || billing === "3x5") {
  if (billing === "1x15") {
    document.querySelectorAll("[data-single-charge]").forEach((amount) => {
      amount.textContent = amount.dataset.singleCharge;
    });
  }

  document.querySelectorAll('a[href$=".html"]').forEach((link) => {
    const target = new URL(link.href);
    target.searchParams.set("billing", billing);
    link.href = target.href;
  });
}
