'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Check, ChevronDown, CircleCheckBig, Clock3, FileText, Instagram, MessageCircle, ShieldCheck, TikTok } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.55 } }

const faq = [
['Як ви вносите посвідчення в Дію?','Наш юрист подає офіційний запит до МВС з проханням провести верифікацію посвідчення водія. Після оновлення інформації посвідчення з’являється в Дії або оновлюється до нового зразка.'],
['Це офіційна процедура?','Так. Посвідчення замовляється через державний застосунок «Дія» або Кабінет водія. Ми надаємо організаційний супровід та допомагаємо з доставкою документів у Європу.'],
['Як я можу перевірити результат?','Перед фінальним етапом посвідчення оновлюється в Дії. Клієнт може самостійно перевірити інформацію у застосунку.'],
['Чи можу я відновити посвідчення після обміну на європейське?','Ні. Якщо Україна отримала інформацію про офіційний обмін посвідчення на європейське, дистанційне відновлення неможливе.'],
['Що робити, якщо я не можу авторизуватись у Дії?','Наш менеджер допоможе пройти авторизацію через банк або документи та підкаже, як правильно налаштувати Дію.'],
['Що робити, якщо Дія дає відмову при замовленні посвідчення?','У більшості випадків проблема пов’язана з помилками або відсутністю даних у реєстрі МВС. Для цього необхідно провести верифікацію посвідчення.'],
['Чи допомагаєте ви за відсутності прописки в Україні?','Так, у багатьох випадках відсутність прописки не є проблемою. Ситуація перевіряється індивідуально.'],
['Чи допомагаєте, якщо в Дії не підтягується фото?','Так. Це одна з найпоширеніших проблем. У більшості випадків її можна вирішити через верифікацію даних.'],
['Чи потрібно їхати в Україну?','У більшості випадків — ні. Процедура проходить дистанційно.'],
['Чи можна оплатити послугу при отриманні?','Так, у деяких випадках можлива фінальна оплата при особистому отриманні документів у Польщі або Чехії.']
]

export default function Page() {
  const [s, setS] = useState(7200)
  const [success, setSuccess] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', country: '', year: '', issue: '' })
  const [err, setErr] = useState({ name: '', phone: '' })

  useEffect(() => { const id = setInterval(() => setS((v) => Math.max(0, v - 1)), 1000); return () => clearInterval(id) }, [])
  const t = useMemo(() => [Math.floor(s / 3600), Math.floor((s % 3600) / 60), s % 60].map((n) => String(n).padStart(2, '0')).join(':'), [s])
  const send = (e: React.FormEvent) => { e.preventDefault(); const n = { name: form.name.trim() ? '' : 'Обовʼязково', phone: form.phone.trim() ? '' : 'Обовʼязково' }; setErr(n); if (n.name || n.phone) return; setSuccess(true) }

  return <main className='relative overflow-hidden'>
    <motion.div className='pointer-events-none fixed inset-0 -z-10' style={{ background: 'radial-gradient(circle at 15% 30%, rgba(56,189,248,.12), transparent 30%), radial-gradient(circle at 80% 10%, rgba(59,130,246,.12), transparent 30%)' }} animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 6, repeat: Infinity }} />

    <section className='section relative'>
      <motion.div className='absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl' animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 8 }} />
      <div className='container-premium grid gap-10 lg:grid-cols-2'>
        <motion.div {...fade}>
          <p className='text-cyan-300'>DocExpert • Юридичний супровід</p>
          <h1 className='mt-3 text-4xl font-semibold leading-tight md:text-6xl'>Відновлення посвідчення водія дистанційно</h1>
          <p className='mt-3 text-2xl text-slate-300'>Для українців за кордоном</p>
          <p className='mt-5 text-slate-300'>Допомагаємо внести посвідчення в Дію, перевипустити пластикове посвідчення та виправити помилки в базі МВС без необхідності приїжджати в Україну.</p>
          <div className='mt-6 flex flex-wrap gap-3'>{['Офіційна процедура','Робота через державні реєстри','Супровід клієнтів по Європі','Договір про надання послуг'].map((x)=><span key={x} className='glass rounded-full px-4 py-2 text-sm'>{x}</span>)}</div>
          <div className='mt-8 flex flex-wrap gap-3'>
            <a className='btn-main bg-violet-500 hover:bg-violet-400' href='viber://chat?number=%2B380963925481'>Написати у Viber</a>
            <a className='btn-main bg-emerald-500 hover:bg-emerald-400 text-slate-900' href='https://wa.me/380963925481'>Написати у WhatsApp</a>
            <a className='btn-main border border-white/30 hover:border-cyan-300' href='#form'>Отримати консультацію</a>
          </div>
        </motion.div>
        <motion.div {...fade} className='glass glow-border rounded-3xl p-7'>
          <h3 className='text-2xl'>Контакти для швидкого звʼязку</h3>
          <div className='mt-5 space-y-3 text-slate-300'><p>+380963925481</p><p>Віталій</p><p>Viber / WhatsApp</p></div>
          <div className='mt-6 flex gap-3'><a target='_blank' href='https://www.tiktok.com/@documentexxpert?_r=1&_t=ZS-96SubZK4WdY' className='btn-main glass'><TikTok size={18}/></a><a target='_blank' href='https://www.instagram.com/pro_docs_poland?igsh=MTduMWt4bjdiNXg1dg==' className='btn-main glass'><Instagram size={18}/></a></div>
        </motion.div>
      </div>
    </section>

    <section className='section pt-0'><div className='container-premium'><motion.div {...fade} className='glass rounded-3xl p-8 glow-border'><span className='rounded-full bg-amber-300/20 px-3 py-1 text-amber-200'>Лише 10 місць</span><h2 className='mt-4 text-3xl'>Безкоштовна перевірка ситуації для перших 10 заявок</h2><p className='mt-3 text-slate-300'>Залиште заявку сьогодні — ми безкоштовно перевіримо вашу ситуацію та підкажемо, чи можливо відновити або перевипустити посвідчення дистанційно.</p><div className='mt-5 flex flex-wrap items-center gap-4'><div className='rounded-2xl border border-cyan-300/40 bg-slate-950/70 px-5 py-3 text-3xl font-semibold tracking-[0.2em]'>{t}</div><a href='#form' className='btn-main bg-cyan-400 text-slate-950 hover:bg-cyan-300'>Залишити заявку</a></div><p className='mt-3 text-sm text-slate-400'>{s ? 'Кількість безкоштовних перевірок обмежена через індивідуальний аналіз кожної ситуації.' : 'Залиште заявку — менеджер перевірить доступність консультації.'}</p></motion.div></div></section>

    <section className='section'><div className='container-premium grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>{['Втрачене посвідчення водія','Посвідчення не відображається в Дії','Помилки у базі МВС','Старий зразок посвідчення','Відсутність посвідчення в реєстрі','Відсутність фото в Дії','Відмова при замовленні посвідчення через Дію','Допомога для українців за кордоном'].map((i)=><motion.div key={i} whileHover={{ y: -6, scale: 1.02 }} className='glass rounded-2xl p-5'><ShieldCheck className='mb-3 text-cyan-300'/>{i}</motion.div>)}</div></section>

    <section className='section'><div className='container-premium grid gap-6 md:grid-cols-2'>{[['Верифікація посвідчення — 200€',['Оновлення інформації в державних реєстрах','Внесення посвідчення в Дію','Термін виконання: до 1 місяця']],['Перевипуск пластикового посвідчення — 300€',['Замовлення нового посвідчення','Отримання документів в Україні','Доставка в Європу','Термін виконання: до 3-х тижнів']]].map(([title, list])=><div key={title as string} className='glass rounded-3xl p-7'><h3 className='text-2xl'>{title as string}</h3><ul className='mt-4 space-y-2'>{(list as string[]).map((x)=><li key={x} className='flex gap-2'><CircleCheckBig size={18} className='text-cyan-300'/>{x}</li>)}</ul></div>)}</div></section>

    <section className='section'><div className='container-premium space-y-3'>{['Перевірка документів та ситуації клієнта','Верифікація посвідчення через державні реєстри','Оновлення посвідчення в Дії','Замовлення нового пластикового посвідчення','Отримання документів в Україні','Доставка документів клієнту за кордон'].map((x,i)=><motion.div key={x} {...fade} className='glass rounded-2xl p-5'><span className='mr-3 text-cyan-300'>0{i+1}</span>{x}</motion.div>)}</div></section>

    <section className='section'><div className='container-premium grid gap-6 lg:grid-cols-2'><div className='glass rounded-2xl p-6'><h3 className='text-2xl'>Необхідні документи</h3><ul className='mt-4 space-y-2'>{['Фото посвідчення водія','Закордонний паспорт','Внутрішній паспорт / ID-карта','ІПН','Прописка','Додаткові документи за потреби'].map((x)=><li key={x}>• {x}</li>)}</ul></div><div className='glass rounded-2xl p-6'><h3 className='text-2xl'>Важливі нюанси</h3><ul className='mt-4 space-y-2'>{['Посвідчення до 2014 року часто відсутні в електронному реєстрі','Дія може не підтягувати посвідчення автоматично','Помилки у базі МВС можуть блокувати процедуру','Іноді відсутня цифрова фотографія','Посвідчення з окупованих територій можуть вимагати додаткової перевірки','Для деяких процедур необхідна попередня верифікація посвідчення'].map((x)=><li key={x}>• {x}</li>)}</ul></div></div></section>

    <section className='section'><div className='container-premium rounded-3xl border border-red-300/40 bg-red-950/30 p-7'><h3 className='text-2xl text-red-200'>У яких випадках ми НЕ допомагаємо</h3><ul className='mt-4 space-y-2 text-red-100'>{['Виготовлення посвідчення “з нуля”','Додавання нових категорій','Відновлення після ст.130 КУпАП','Підроблені документи','Процедури, які вимагають складання іспитів в Україні'].map((x)=><li key={x} className='flex gap-2'><AlertTriangle size={18}/>{x}</li>)}</ul></div></section>

    <section className='section'><div className='container-premium grid gap-6 lg:grid-cols-2'><div className='glass rounded-2xl p-6'><h3 className='text-2xl'>Умови співпраці та оплата</h3><ul className='mt-4 space-y-2'>{['Попередня перевірка документів','Договір про надання послуг','Часткова передплата на фірмовий рахунок компанії','Фото та підтвердження результату','Посвідчення оновлюється в Дії перед фінальним етапом','Фінальна оплата перед відправкою документів','Можливість особистого отримання документів у Польщі або Чехії'].map((x)=><li key={x}>• {x}</li>)}</ul></div><div className='glass rounded-2xl p-6'><h3 className='text-2xl'>Про нас</h3><p className='mt-4 text-slate-300'>Спеціалізуємось на дистанційному супроводі процедур, пов’язаних з посвідченнями водія для українців за кордоном.</p><a target='_blank' className='mt-4 inline-flex text-cyan-300' href='https://www.instagram.com/pro_docs_poland?igsh=MTduMWt4bjdiNXg1dg=='>Переглянути наші соцмережі</a></div></div></section>

    <section className='section'><div className='container-premium'><h2 className='mb-6 text-3xl'>FAQ</h2><div className='space-y-3'>{faq.map(([q,a])=><details key={q as string} className='glass group rounded-2xl p-4'><summary className='flex cursor-pointer list-none items-center justify-between text-lg'>{q as string}<ChevronDown className='transition group-open:rotate-180'/></summary><p className='mt-3 text-slate-300'>{a as string}</p></details>)}</div></div></section>

    <section id='form' className='section'><div className='container-premium grid gap-8 lg:grid-cols-2'><div><h2 className='text-4xl'>Потрібна перевірка вашої ситуації?</h2><p className='mt-3 text-slate-300'>Перед початком роботи ми перевіримо документи та підкажемо, чи можливо відновити або перевипустити посвідчення дистанційно.</p></div><form onSubmit={send} className='glass glow-border rounded-3xl p-6 space-y-4'><label className='block'>Імʼя * <span className='text-xs text-slate-400'>Обов’язкове поле</span><input value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} className={`mt-1 w-full rounded-xl border bg-slate-900/60 p-3 ${err.name ? 'border-red-400' : 'border-white/20'}`} />{err.name && <p className='text-sm text-red-300'>{err.name}</p>}</label><label className='block'>Номер телефону / месенджер * <span className='text-xs text-slate-400'>Обов’язкове поле</span><input value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} className={`mt-1 w-full rounded-xl border bg-slate-900/60 p-3 ${err.phone ? 'border-red-400' : 'border-white/20'}`} />{err.phone && <p className='text-sm text-red-300'>{err.phone}</p>}</label><label className='block'>Країна перебування <span className='text-xs text-slate-400'>необовʼязково</span><input value={form.country} onChange={(e)=>setForm({...form,country:e.target.value})} className='mt-1 w-full rounded-xl border border-white/20 bg-slate-900/60 p-3' /></label><label className='block'>Рік видачі посвідчення <span className='text-xs text-slate-400'>необовʼязково</span><input value={form.year} onChange={(e)=>setForm({...form,year:e.target.value})} className='mt-1 w-full rounded-xl border border-white/20 bg-slate-900/60 p-3' /></label><label className='block'>Опишіть проблему <span className='text-xs text-slate-400'>необовʼязково</span><textarea value={form.issue} onChange={(e)=>setForm({...form,issue:e.target.value})} className='mt-1 min-h-24 w-full rounded-xl border border-white/20 bg-slate-900/60 p-3' /></label><button className='btn-main w-full bg-cyan-400 text-slate-950 hover:bg-cyan-300'>Отримати консультацію</button>{success && <p className='text-emerald-300'>Дякуємо, ми зв’яжемося з вами найближчим часом.</p>}</form></div></section>

    <div className='fixed bottom-5 right-5 z-50 flex flex-col gap-3'><a href='viber://chat?number=%2B380963925481' className='btn-main rounded-full bg-violet-500 p-4 shadow-2xl'><MessageCircle/></a><a href='https://wa.me/380963925481' className='btn-main rounded-full bg-emerald-500 p-4 text-slate-900 shadow-2xl'><MessageCircle/></a></div>
    <footer className='border-t border-white/10 py-10'><div className='container-premium flex flex-wrap items-center justify-between gap-4'><p>© DocExpert</p><div className='flex items-center gap-3'><a target='_blank' href='https://www.tiktok.com/@documentexxpert?_r=1&_t=ZS-96SubZK4WdY' className='btn-main glass'>TikTok</a><a target='_blank' href='https://www.instagram.com/pro_docs_poland?igsh=MTduMWt4bjdiNXg1dg==' className='btn-main glass'>Instagram</a></div></div></footer>
  </main>
}
