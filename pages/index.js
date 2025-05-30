import Head from 'next/head'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Head>
        <title>ConstruyeTuCasa.mx</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <canvas id="bg" className="fixed top-0 left-0 -z-10 w-screen h-screen"></canvas>

      <main className="font-sans text-white relative">
        <section className="h-screen flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl font-bold drop-shadow-lg">Diseña y construye tu casa</h1>
          <p className="text-xl mt-4 max-w-xl">Explora modelos personalizables, visualiza en 3D y conecta con expertos cerca de ti.</p>
          <button className="mt-8 bg-blue-600 px-6 py-3 rounded-full text-white hover:bg-blue-700 transition">Empieza tu proyecto</button>
        </section>

        <section className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 p-12 glass mx-6 -mt-32 shadow-xl">
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold mb-2">💡 Simula</h3>
            <p>Conoce cuánto costaría tu casa en base a tu terreno y presupuesto.</p>
          </div>
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold mb-2">🧱 Construye</h3>
            <p>Modelos modulares inspirados en licitaciones reales de obra pública.</p>
          </div>
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold mb-2">👷 Conecta</h3>
            <p>Ingenieros certificados y arquitectos locales listos para trabajar contigo.</p>
          </div>
        </section>

        <section className="p-12 text-center bg-blue-900">
          <h2 className="text-3xl font-bold">¿Tienes un terreno y no sabes por dónde empezar?</h2>
          <p className="mt-2 text-lg">Sube tu información y recibe una propuesta 3D gratuita.</p>
          <button className="mt-6 bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200">Subir datos del terreno</button>
        </section>

        <footer className="bg-black text-white text-center p-4 text-sm">
          © 2025 ConstruyeTuCasa.mx — Visualiza, planea, construye
        </footer>
      </main>

      <Script src="/torus.js" strategy="afterInteractive" />
    </>
  )
}
