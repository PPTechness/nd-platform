export function printWithWatermark({
    name = 'Parent',
    email = 'user@example.com',
  }: { name?: string; email?: string }) {
    const stamp = `${name} • ${email} • ${new Date().toLocaleString()}`;
    document.body.setAttribute('data-watermark', stamp);
    window.print();
    // optional: clean up afterwards
    setTimeout(() => document.body.removeAttribute('data-watermark'), 1000);
  }