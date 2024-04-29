import Image from 'next/image'

export default function DocumentsPage() {
  return (
    <div className="document">
      <div className="w-full flex flex-col justify-start items-center ml-10">
        <h1 className="document-heading">Next js Folder Structure</h1>
        <article className="document-body">
          <p>
            به طور کلی در ساختار پوشه بندی برنامه های <span>Next Js</span>{' '}
            ساختار پوشه بندی میتواند خیلی سلیقه باشد اما به طور کلی ما با مثال
            تصویر این عنوان را بیان میکنیم
            <br />
            <br />
            <span>پوشه storybook</span>: برای کانفیگ storybook
            <br />
            <br />
            <span>پوشه public</span>: برای نگهداری فونت ها و عکسها (assetes)
            <br />
            <br />
            <span>پوشه src</span>: هسته مرکزی برنامه هست که بیشتر راجبش صحبت
            خواهیم کرد
            <br />
            <br />
            بقیه فایلها مانند
            <span> .eslintrc.json </span>, <span> next.config.mjs </span> ,{' '}
            <span> tailwind.config.ts </span> , <span> package.json </span>
            برای کانفیگ و نتظیمات دیگر است
          </p>
          <Image
            src="/images/folders.jpg"
            alt="folders"
            width={300}
            height={100}
          />
        </article>
      </div>
    </div>
  )
}
