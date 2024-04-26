import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(inter.className, "mt-20 flex flex-col min-h-screen")}
      >
        <header className="bg-white shadow-[rgba(69,_60,_144,_0.1)_0px_2px_12px_0px] px-8 fixed z-10 top-0 left-0 h-20 w-full">
          <div className="container mx-auto w-full h-full flex items-center">
            <a href="/" aria-label="Navigate to the home page">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="130"
                height="32"
                fill="none"
                stroke-linecap="square"
                stroke-linejoin="round"
                stroke-width="2"
                aria-hidden="true"
                viewBox="0 0 130 32"
              >
                <path
                  fill="#463c90"
                  fillRule="evenodd"
                  d="M8.61 1.947A38.4 38.4 0 0 1 9.3 7.862a58 58 0 0 1-.266 6.252l.048.38.009.076c.263 2.232.533 4.53 1.5 6.58.15.237.241.504.266.78l3.96.138a.87.87 0 0 0 .506-.099 1.4 1.4 0 0 1-.178-.688 1.39 1.39 0 0 1 1.211-1.406c.019-.291.048-.582.077-.863q.093-.72.093-1.445c0-.215-.016-.446-.032-.672l-.01-.138v-.01c-.022-.329-.043-.656-.045-.986v-.166c0-.78 0-1.941-.718-2.248a4.27 4.27 0 0 0-2.054-.283 5 5 0 0 0-.53.078l-.011.002c-.529.09-1.12.191-1.6-.044-.483-.236-.61-.857-.653-1.143a7.4 7.4 0 0 1-.05-1.04V10.7c0-.401-.029-.812-.056-1.216L10.76 9.4c0-.12-.01-.238-.02-.352q-.01-.085-.014-.168l-.025-.349-.013-.17a6 6 0 0 1 .016-1.736c.11-.541.203-1.08.29-1.573v-.003l.085-.482a.34.34 0 0 1 .392-.275c.185.03.31.202.28.384a64 64 0 0 1-.377 2.079 5.6 5.6 0 0 0 0 1.559l.015.194q.015.165.025.325l.031.52c.032.434.062.884.064 1.333v.221q-.012.48.045.959c.04.286.104.561.28.65.263.136.753.053 1.176-.02l.008-.001a5 5 0 0 1 .62-.086 4.9 4.9 0 0 1 2.37.327c1.091.49 1.102 1.905 1.107 2.859v.159c0 .263.016.526.032.788l.01.173c.02.278.038.556.046.834q.004.77-.099 1.533c-.029.26-.053.546-.071.819a1.37 1.37 0 0 1 1.108 1.38q-.002.197-.054.39c.611.28 1.15.52 1.82.48a13.4 13.4 0 0 0 2.373-.408 32.6 32.6 0 0 0 4.822-1.447 5 5 0 0 0 .547-.26l-.051-.084q-.04-.067-.082-.132a14 14 0 0 1-.948-1.738 25 25 0 0 0-1.026-2.144c-.202-.369-.465-.78-.89-.91a9.2 9.2 0 0 0-2.144-.353c-.531-.036-1.062-.062-1.594-.088l-.776-.031a4 4 0 0 1-.565-.091 6 6 0 0 1-.976-.338l-.239-.099c-.866-.346-.74-.972-.57-1.414s.347-.904 1.19-.78c.329.045.573-.277.905-.779q.107-.16.21-.301l-.037-.07a1.52 1.52 0 0 1-.295-1.016c.08-.453.473-.78.797-1.024q.093-.071.17-.138a.345.345 0 0 1 .481.029.323.323 0 0 1-.03.47q-.058.051-.128.107l-.06.049-.036.029c-.225.179-.496.395-.516.59.011.207.086.406.215.571q.081.138.146.26l.64.566q.117-.142.225-.282l.041-.053c.327-.364.683-.699 1.03-1.024A10 10 0 0 0 24.18 8.26c.518-.791.962-1.627 1.325-2.497l.218-.483q.05-.118.098-.237l.061-.15c.136-.392.33-.762.577-1.097q.14-.172.297-.328c-5.2-3.992-12.326-4.589-18.145-1.52m5.214 29.832q-.095-.012-.321-.05l-.36-.067a16.7 16.7 0 0 1-4.469-1.58l.048-.278c.354-2.162.72-4.394 1.64-6.413.216-.218.371-.486.451-.78l3.512.11.686.011v-.001c.284-.016.56-.106.797-.26.255.157.551.24.853.239.419.003.82-.161 1.113-.455.638.304 1.249.564 2.022.564h.162a14 14 0 0 0 2.534-.436 57 57 0 0 0 2.612-.684 19 19 0 0 1-2.218 2.056 21.4 21.4 0 0 1-3.568 2.021 7 7 0 0 0-1.823 1.268 5.7 5.7 0 0 0-.89 1.258l-.076.131q-.049.086-.1.17a8 8 0 0 1-.38.557 4.8 4.8 0 0 0-.674 1.143c-.175.482-.327.981-.474 1.462l-.015.05-.032.1q-.521-.052-1.03-.136m6.716-5.852c1.246 1.65 3.076 2.625 4.957 3.474a16.8 16.8 0 0 1-9.95 2.57c.144-.475.295-.966.465-1.437a4.2 4.2 0 0 1 .59-.982q.22-.287.412-.605l.11-.188.07-.122c.209-.403.47-.778.78-1.114a6.3 6.3 0 0 1 1.641-1.141zM13.087 8.184h-.005q-.024.403.042.803c.02.16.136.772.285.842.105.05.327.029.5.012.072-.006.136-.012.18-.012h1.732V8.55h-.39V6.931h-1.743l-.111-.003c-.12-.006-.184-.01-.264.089-.182.223-.206.751-.221 1.07zM7.495 23.568c.024-.99.058-1.96.1-2.9-.996.08-1.96.543-1.96 1.455s.906 1.343 1.86 1.444m1.06-2.854c.345.052.678.167.98.338.404.212.657.623.66 1.07 0 .84-.822 1.297-1.73 1.427a96 96 0 0 1 .09-2.835m24.15-1.712-3.446.842a.2.2 0 0 1-.056 0 6 6 0 0 1-1.328.842c.076.267.225.51.43.701q.208.15.439.26c.275.118.528.282.746.484q.76.805 1.395 1.707a15.7 15.7 0 0 0 1.82-4.836m-2.633-1.219a8.7 8.7 0 0 1-1.232 1.505 5 5 0 0 1-.585.431q-.071-.112-.138-.226a13 13 0 0 1-.917-1.671c-.398-.9-.722-1.577-1.062-2.198a3.4 3.4 0 0 0-.47-.689l-.556-6.86a20 20 0 0 0 1.004-2.048l.213-.48q.08-.18.154-.366l.018-.045a3.6 3.6 0 0 1 .479-.93q.136-.165.292-.313c3.04 2.53 5.026 6.063 5.58 9.93l-.213.306a201 201 0 0 1-2.301 3.29 7 7 0 0 0-.266.364m-8.589-3.836q.539.029 1.076.063a9.7 9.7 0 0 1 2.316.387l.072.031-.44-5.457q-.595.712-1.287 1.333c-.334.312-.682.637-.988.98a19 19 0 0 0-1.722 2.398l-.135.208.563.026zm9.15 4.213.255-.356c.676-.94 1.34-1.901 1.991-2.844l.001-.002.072-.104c.027.37.048.762.048 1.149a16 16 0 0 1-.17 2.279l-2.784.68c.146-.184.284-.378.418-.567zm-10.707-4.826c.35-.54.71-1.089 1.1-1.616l-.478-.426-.083.122c-.332.499-.797 1.18-1.575 1.07-.13-.018-.202-.028-.257 0-.07.035-.109.135-.197.364-.157.406-.104.445.193.564l.234.104q.375.162.765.278zM8.586 20.04a94 94 0 0 1 .219-3.093c.164 1.155.439 2.292.82 3.397a3.8 3.8 0 0 0-1.038-.304M7.549 29.44A45 45 0 0 0 5.5 23.432v-.023a1.8 1.8 0 0 1-.532-1.149 8 8 0 0 0-.566-.345 7 7 0 0 1-.762-.478q-.286-.218-.567-.441l-.127-.1c-.31-.26-.635-.496-.959-.733-.27.288-.58.535-.924.733l-.205.135-.016.021c1.194 3.461 3.56 6.42 6.706 8.388M.658 12.82a5 5 0 0 0-.265-.229 15.8 15.8 0 0 1 3.454-6.84l.064 1.133.003.056c.1 1.885.203 3.835.398 5.745l.019.148c.053.465.04.626-.155.725a1.9 1.9 0 0 1-.7.122q-.062.004-.122.01-.084.009-.163.01c-.131.013-.273.04-.422.068l-.043.008-.04.007c-.344.06-.722.128-.903-.007-.362-.276-.714-.59-1.057-.896zm.71 1.476a15 15 0 0 1-1.137-.957 15.507 15.507 0 0 0 .401 7.042l.061-.038c.351-.229.832-.544.901-.85a2.4 2.4 0 0 0 0-.702 4 4 0 0 1-.032-.402l-.127-4.05zM30.46 24.402l.045.072a16.3 16.3 0 0 1-4.349 4.512c-1.894-.866-3.78-1.799-5.003-3.379q1.127-.578 2.147-1.322 1.261-.992 2.34-2.17.43-.445.867-.878.377-.132.744-.278c.117.375.341.71.645.966q.251.18.532.31c.208.084.401.201.57.348q.796.86 1.462 1.819M16.076 20.72a.74.74 0 0 0-.239.56c0 .442.366.8.818.8a.81.81 0 0 0 .819-.8.7.7 0 0 0-.242-.572.9.9 0 0 0-.571-.192.78.78 0 0 0-.585.204m-7.62 3.501a4 4 0 0 0 1.013-.252 21 21 0 0 0-.94 3.436l-.015-.325a69 69 0 0 1-.039-.94c-.018-.645-.018-1.282-.018-1.919M7.44 17.986c-.13.467-.266.953-.436 1.419q-.153.404-.372.78.487-.15.997-.18c.058-1.175.154-2.354.252-3.521l-.252.852c-.067.208-.128.429-.189.65m.077 8.183c.013.4.032.803.05 1.2a40 40 0 0 0-1.184-3.399c.356.14.73.228 1.113.26-.003.64 0 1.287.021 1.939M4.49 5.037q.053.902.1 1.796l.003.047c.1 1.882.204 3.827.4 5.721l.015.138c.05.426.125 1.068-.531 1.396a2.4 2.4 0 0 1-.978.194l-.266.019c-.099 0-.216.026-.328.052l-.068.015a4 4 0 0 1-.712.096l.112 3.86c0 .093.011.192.023.293l.006.06a3.1 3.1 0 0 1 0 .818c.312.215.615.455.911.69l.184.144c.226.18.454.356.683.52q.33.236.688.429l.316.182c.117-.336.331-.632.616-.853q.06-.114.123-.227.073-.133.143-.266.291-.46.491-.964c.163-.447.295-.92.423-1.378l.063-.224q.062-.225.128-.446l1.063-3.6c.149-1.883.266-3.796.212-5.677a36 36 0 0 0-.608-5.431A16.5 16.5 0 0 0 4.49 5.037"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#d40158"
                  fillRule="evenodd"
                  d="M44.461 1.405v-.006c2.665.314 5.12 1.688 6.878 3.847a.65.65 0 0 0 .507.245.67.67 0 0 0 .502-.242.74.74 0 0 0 0-.924C50.372 1.897 47.61.352 44.615 0h-.083c-.347.005-.632.297-.65.667-.02.37.234.693.58.738m-2.73 29.154v.003c-3.167 0-6.194-1.462-8.529-4.12a.71.71 0 0 0-.534-.26.67.67 0 0 0-.616.426c-.106.28-.047.6.151.814 2.6 2.952 5.983 4.578 9.529 4.578.373 0 .675-.323.675-.72 0-.398-.302-.72-.675-.72m2.791-12.487c-.22-.06-.44-.12-.655-.17v-3.199c.582.157.906.422 1.043.85q.162.577.22 1.177c.043.482.136.957.277 1.417q.027.075.056.148c-.312-.057-.629-.14-.94-.223m-.643-4.281c.71.166 1.51.51 1.82 1.466q.191.66.256 1.345.062.63.244 1.233.093.267.214.52c.2 0 .431.002.66.004.451.003.893.006 1.07-.004q.12-.266.205-.546a3 3 0 0 1 .103-.291c.114-.301.362-.52.66-.583l.149-.052.521-.198-.095-.05a.34.34 0 0 1-.14-.297.34.34 0 0 1 .172-.278.3.3 0 0 1 .312.02c.212.148 1.628 1.04 1.747 1.092h.03q.147-.11.277-.242l.044-.042q.076-.073.147-.135l.58-.489c-1.763-3.543-5.217-5.756-8.976-5.748zm2.593 17.78a.1.1 0 0 0-.025.023q-.731.21-1.484.302a5 5 0 0 0-.201.028c-.241.038-.4.063-.617-.093a.64.64 0 0 1-.278-.52v-7.072L46.742 31c-.1.188-.187.38-.27.57m5.58-3.993c-.728-.39-1.588-.944-2.122-1.807a3.8 3.8 0 0 1-.441-2.601c.165-.873.438-1.718.812-2.513l.06-.148c.3-.715.524-1.418.137-1.693-.197-.14-.5-.055-.58 1.017a2.7 2.7 0 0 1-.244 1.04.98.98 0 0 1-.66.52c-.653.148-1.463-.325-1.813-.596a5.5 5.5 0 0 1-1.414-1.781 9 9 0 0 1-1.408-.297q-.226-.062-.45-.117l-.053-.013v4.034l3.312 7.785.05-.052 1.556-1.443a.302.302 0 0 1 .461.06l.604.912a10.5 10.5 0 0 0 2.194-2.307m1.31-8.755c.084.046.17.084.255.123q.083.036.164.075c.536 2.685.08 5.487-1.273 7.821h-.014c-.648-.354-1.42-.84-1.867-1.56a2.84 2.84 0 0 1-.314-1.962c.15-.792.4-1.559.74-2.28l.062-.149c.26-.619.794-2.08-.271-2.746-1.233-.771-1.428.39-1.586 1.335-.077.461-.146.871-.322.98q-.02.011-.034.03c-.016.018-.034.038-.074.047-.27.058-.818-.179-1.142-.44a4.3 4.3 0 0 1-.92-1.04h.583a4 4 0 0 0 1.073-.075c.226-.138.35-.476.502-.934l.014-.045c.026-.078.048-.145.068-.191.061-.148.071-.151.277-.223l.004-.001.168-.057.802-.305.107-.046a.3.3 0 0 0 .078-.047c.077.026 1.05.634 1.05.634l.731.43q.074.045.156.044a.3.3 0 0 0 .27-.17.35.35 0 0 0 .031-.253.33.33 0 0 0-.147-.202l-.146-.085.023-.022.018-.018.063-.06.054-.05q.055-.054.11-.1l.47-.403q.27.649.463 1.329a.304.304 0 0 0-.402.187.34.34 0 0 0 .175.43m-2.923-1.69h.003zm-3.15 14.196a9.8 9.8 0 0 0 2.046-1.061l-.402-.609-1.296 1.204a1.9 1.9 0 0 0-.349.466m-9.861-15.45-2.364-2.208a19 19 0 0 0-2.166-6.856l1.847 1.675c.13.115.216.277.244.455q.154.616.219 1.248.063.555.178 1.098a5.1 5.1 0 0 0 1.165 2.473c.765.855 1.829 1.332 2.936 1.32q.29-.001.578-.04c.736-.099 1.47-.244 2.181-.403v2.861l-3.833-1.126c-.069-.024-.156-.044-.244-.065a2 2 0 0 1-.414-.125 1 1 0 0 1-.205-.185zm4.828 2.315-4-1.176q-.082-.024-.175-.044l-.044-.01a2 2 0 0 1-.563-.182 1.5 1.5 0 0 1-.36-.302l-.033-.033-.065-.063-1.867-1.74q.042.635.044 1.282a19 19 0 0 1-.112 2.026c1.875 2.09 4.464 3.276 7.175 3.288zM41.644.013c.66-.039.612.757.612.757V13.75c-.746.167-1.519.326-2.284.427-1.035.167-2.081-.21-2.81-1.012a4.2 4.2 0 0 1-.955-2.062c-.07-.308-.11-.629-.154-.964l-.002-.014.046.03a2 2 0 0 0 1.048.45c.252 0 .5-.073.714-.212.183-.11.268-.133.349-.11.303.11.586.274.838.484.137.11.154.123-.073.57l-.058.117a.463.463 0 0 0 .175.6q.092.051.195.053a.41.41 0 0 0 .368-.24l.056-.109.01-.022c.2-.406.545-1.11-.173-1.682a3.6 3.6 0 0 0-1.1-.637 1.19 1.19 0 0 0-.945.17.6.6 0 0 1-.336.119c-.371-.039-.82-.349-1.076-.524-.104-.072-.175-.121-.196-.121-.025-.113-.05-.197-.08-.3l-.018-.064a1.63 1.63 0 0 0-.504-.88L33.409 6.11a.4.4 0 0 0-.173-.089 10.7 10.7 0 0 1 2.723-3.66l.016.04c.051.119.163.195.286.195a.3.3 0 0 0 .129-.029.345.345 0 0 0 .156-.442l-.076-.177A9.55 9.55 0 0 1 41.644.013m6.257 14.965a.35.35 0 0 1 .08-.24.3.3 0 0 1 .443-.027c.202.195.41.393.619.58a.35.35 0 0 1 .09.37.32.32 0 0 1-.292.22.3.3 0 0 1-.203-.077 29 29 0 0 1-.633-.596.34.34 0 0 1-.104-.23m-.895-1.783v.005a.3.3 0 0 0-.434-.091.35.35 0 0 0-.086.463q.092.139.203.26l.243.26.152.172c.058.067.14.104.226.104a.3.3 0 0 0 .217-.091.354.354 0 0 0 .012-.473l-.15-.17q-.1-.095-.191-.2l-.021-.024-.032-.036a2 2 0 0 1-.14-.18m-1.436-2.018-.005-.006a.297.297 0 0 1 .439.047 4.2 4.2 0 0 1 .468.827.35.35 0 0 1 .014.255.32.32 0 0 1-.16.19.3.3 0 0 1-.137.034.31.31 0 0 1-.28-.187 3.5 3.5 0 0 0-.39-.698.345.345 0 0 1 .051-.462m-8.43-6.521a.3.3 0 0 0 .112-.013.32.32 0 0 0 .17-.183.35.35 0 0 0-.004-.257c-.05-.13-.105-.263-.16-.39l-.178-.455a.305.305 0 0 0-.415-.164.343.343 0 0 0-.153.442l.185.44c.043.094.085.199.126.303l.03.074a.31.31 0 0 0 .287.203m1.278 1.727a.34.34 0 0 1-.13.216.3.3 0 0 1-.178.06.31.31 0 0 1-.258-.146 9 9 0 0 1-.373-.62q-.048-.088-.092-.181a.35.35 0 0 1 .011-.334.31.31 0 0 1 .277-.156.31.31 0 0 1 .265.178q.041.085.085.164c.102.195.224.39.341.57a.35.35 0 0 1 .052.25m1.544 1.625a.35.35 0 0 0-.022-.258.32.32 0 0 0-.19-.163l-.309-.104a1.2 1.2 0 0 1-.336-.161.5.5 0 0 1-.066-.073.3.3 0 0 0-.439-.052.35.35 0 0 0-.049.468q.077.106.176.19.25.178.539.26l.102.034.075.026.13.044c.069.026.145.026.214 0a.33.33 0 0 0 .175-.21m1.663.367c.16.069.238.263.175.435a.315.315 0 0 1-.29.21.3.3 0 0 1-.117-.023l-.785-.333a.345.345 0 0 1-.08-.572.3.3 0 0 1 .31-.05z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#463c90"
                  fillRule="evenodd"
                  d="M84.24 13.473a3.54 3.54 0 0 1-2.644 1.196c-2.368 0-4.086-1.915-4.086-4.548 0-2.812 2.122-4.549 4.085-4.549a3.48 3.48 0 0 1 2.645 1.17V2.143c0-.08.063-.144.141-.144h1.392c.078 0 .142.064.143.144v12.132a.145.145 0 0 1-.143.145H84.38a.143.143 0 0 1-.14-.145zm-5.054-3.352c0 1.471.655 3.055 2.527 3.063 1.582 0 2.527-1.56 2.527-3.063 0-1.921-.945-3.067-2.527-3.067-1.744 0-2.527 1.59-2.527 3.067m8.343 4.255a.14.14 0 0 0 .1.042h1.391a.145.145 0 0 0 .144-.144V9.05c0-1.158 1.436-1.996 2.404-1.996.784 0 1.25.303 1.496.956.225.588.225 1.388.225 2.11v4.154c0 .08.063.144.14.144h1.392a.145.145 0 0 0 .144-.144v-4.52c0-2.777-1.068-4.187-3.17-4.187a3.39 3.39 0 0 0-2.668 1.193l-.08-.824a.14.14 0 0 0-.142-.131H87.63a.143.143 0 0 0-.141.144v8.325c0 .038.015.075.041.102m22.257 5.442c.07.005.126.063.13.136a.2.2 0 0 1 0 .067l-3.634 8.971c-.713 1.7-1.851 2.767-3.206 3.008h-.002a.14.14 0 0 1-.11-.053l-.757-.95a.15.15 0 0 1-.025-.14.14.14 0 0 1 .1-.096c1.314-.334 2.076-1.075 2.543-2.475l-3.375-8.268a.14.14 0 0 1 0-.136.15.15 0 0 1 .12-.065h1.454a.14.14 0 0 1 .133.094l2.514 6.636 2.579-6.639a.14.14 0 0 1 .134-.09zM71.644 8.327C71.644 4.838 69.03 2 65.819 2 62.611 2 60 4.839 60 8.328s2.61 6.342 5.82 6.342c3.208 0 5.824-2.853 5.824-6.342m-1.676 0c0-2.673-1.86-4.848-4.149-4.848-2.29 0-4.15 2.175-4.15 4.848s1.863 4.848 4.15 4.848 4.149-2.172 4.149-4.848m8.453 11.53a.14.14 0 0 0-.102-.04h-1.391a.14.14 0 0 0-.1.042.15.15 0 0 0-.041.102v5.234c0 1.156-1.436 1.993-2.405 1.993-.783 0-1.25-.302-1.498-.953-.222-.59-.222-1.359-.222-2.113v-4.161a.15.15 0 0 0-.041-.102.14.14 0 0 0-.1-.043h-1.394a.145.145 0 0 0-.144.145v4.52c0 2.78 1.068 4.187 3.17 4.187a3.38 3.38 0 0 0 2.668-1.194l.083.824a.14.14 0 0 0 .141.132h1.274a.14.14 0 0 0 .102-.042.15.15 0 0 0 .042-.103v-8.324a.15.15 0 0 0-.042-.103m15.285.024a.15.15 0 0 1 .013.139l-3.456 8.321a.14.14 0 0 1-.13.089h-1.337a.14.14 0 0 1-.13-.089l-3.408-8.324a.15.15 0 0 1 .013-.136.14.14 0 0 1 .118-.065h1.451a.14.14 0 0 1 .133.094l2.489 6.553 2.576-6.555a.14.14 0 0 1 .13-.091h1.418c.048-.001.093.023.12.064m7.843 4.439c0-3.061-1.368-4.742-3.854-4.742-2.367 0-4.088 1.91-4.088 4.55 0 2.72 1.645 4.548 4.088 4.548 1 0 2.423-.2 3.514-1.159a.15.15 0 0 0 .04-.163l-.408-1.124a.14.14 0 0 0-.099-.09.14.14 0 0 0-.133.037c-.655.647-1.72 1.02-2.913 1.02-1.624 0-2.3-1.384-2.402-2.73h6.114a.14.14 0 0 0 .101-.043.15.15 0 0 0 .04-.104m-6.24-1.09h4.54c-.245-1.47-.934-2.159-2.154-2.159s-2.14.84-2.386 2.16m-22.556-8.958c0 .08.063.145.141.145h1.392a.14.14 0 0 0 .101-.041.15.15 0 0 0 .042-.104V9.755c0-.634.139-2.708 1.948-2.708.301-.03.604.047.856.22a.14.14 0 0 0 .141 0 .14.14 0 0 0 .07-.126v-1.3a.144.144 0 0 0-.11-.142 3.6 3.6 0 0 0-.887-.126 2.47 2.47 0 0 0-2.062 1.132l-.073-.755a.14.14 0 0 0-.141-.13h-1.277a.143.143 0 0 0-.14.144zm53.394-8.7c2.485 0 3.853 1.677 3.853 4.73 0 .08-.063.144-.141.144h-6.114c.102 1.349.78 2.73 2.402 2.73 1.208 0 2.253-.38 2.918-1.023a.14.14 0 0 1 .128-.037c.048.01.087.044.105.09l.407 1.125a.14.14 0 0 1-.044.176c-1.092.96-2.512 1.162-3.514 1.162-2.444 0-4.086-1.833-4.086-4.55 0-2.637 1.718-4.548 4.086-4.548M128.3 9.21h-4.54c.246-1.316 1.167-2.16 2.387-2.16s1.908.688 2.153 2.16M66.065 21.153c2.53.685 3.811 2.004 3.809 3.922-.01 2.117-1.596 3.594-3.854 3.594-1.686-.019-3.208-.597-4.07-1.547a.15.15 0 0 1 0-.182l.729-1.07a.14.14 0 0 1 .101-.062.12.12 0 0 1 .11.038 4.77 4.77 0 0 0 3.133 1.338c.553.02 1.09-.197 1.48-.599.391-.401.602-.95.582-1.518.013-1.442-1.099-1.867-2.449-2.245-2.166-.607-3.352-1.88-3.352-3.577 0-2.213 1.938-3.238 3.736-3.238a5.46 5.46 0 0 1 2.922.865.15.15 0 0 1 .062.096.14.14 0 0 1-.023.11l-.713 1.038a.144.144 0 0 1-.185.045 4.6 4.6 0 0 0-2.063-.669c-1.015 0-2.06.543-2.06 1.758-.026 1.172 1.188 1.635 2.105 1.903m18.663-1.309a.15.15 0 0 0-.11-.144 3.8 3.8 0 0 0-.89-.129 2.47 2.47 0 0 0-2.062 1.132l-.073-.754a.14.14 0 0 0-.141-.132h-1.277a.14.14 0 0 0-.1.043.15.15 0 0 0-.04.102v8.324c0 .08.062.145.14.145h1.394a.14.14 0 0 0 .1-.043.15.15 0 0 0 .041-.102v-4.52c0-.633.141-2.707 1.945-2.707.303-.03.606.047.86.22a.15.15 0 0 0 .14 0 .15.15 0 0 0 .073-.129zm36.289-7.508a.14.14 0 0 1 .086.107l.36 1.124a.15.15 0 0 1-.044.158c-.739.626-1.729.944-2.94.944-2.475 0-4.206-1.926-4.206-4.564s1.776-4.549 4.222-4.549c.608 0 2.114.12 2.898 1.234a.15.15 0 0 1 0 .168l-.588.872a.13.13 0 0 1-.109.065.2.2 0 0 1-.118-.057c-.582-.743-1.261-.802-2.088-.802-1.864 0-2.525 1.65-2.525 3.066 0 1.945.919 3.064 2.525 3.064a3.53 3.53 0 0 0 2.396-.803.13.13 0 0 1 .131-.027m-25.175-2.215c0 2.625 1.718 4.548 4.086 4.548a3.53 3.53 0 0 0 2.642-1.182v.803c0 .08.063.144.141.144h1.394a.143.143 0 0 0 .141-.144V5.95a.143.143 0 0 0-.141-.145h-1.277a.143.143 0 0 0-.141.131l-.083.843a3.48 3.48 0 0 0-2.676-1.207c-1.966 0-4.086 1.737-4.086 4.549m1.676 0c0 1.471.663 3.055 2.525 3.063 1.582 0 2.527-1.56 2.527-3.063 0-1.921-.945-3.067-2.527-3.067-1.742 0-2.525 1.59-2.525 3.067m15.766-.367c.01-2.777-1.055-4.182-3.159-4.182a3.4 3.4 0 0 0-2.671 1.193l-.081-.824a.14.14 0 0 0-.141-.13h-1.284a.143.143 0 0 0-.141.144v8.319c0 .08.063.144.141.144h1.394a.14.14 0 0 0 .141-.144V9.05c0-1.158 1.438-1.996 2.404-1.996.784 0 1.251.303 1.499.956.222.588.222 1.388.222 2.11v4.154c0 .08.063.144.141.144h1.394a.143.143 0 0 0 .141-.144z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <nav></nav>
          </div>
        </header>

        {children}
        <footer className="bg-[#453c90] flex mt-auto h-48 w-full"></footer>
      </body>
    </html>
  );
}
