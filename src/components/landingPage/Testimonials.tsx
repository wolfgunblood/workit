
import { Tweet } from "react-tweet";
import MaxWidthWrapper from "../MaxWidthWrapper";

const tweets = [
  {
    id: "1832141672203067548",
  },
  {
    id: "1832141672203067548",
  },
  {
    id: "1832141672203067548",
  },
  {
    id: "1832141672203067548",
  },
  {
    id: "1832141672203067548",
  },
  {
    id: "1832141672203067548",
  },
  {
    id: "1832141672203067548",
  },
];

function Testimonials() {
  return (
    <MaxWidthWrapper>
      <div className="my-14 space-y-5 text-center" id="testimonials">
        <h1 className="text-4xl font-bold">6,893 happy customers</h1>
        <h2 className="text-xl font-semibold">
          Hear from our satisfied customers about their experience with our
          products and services.
        </h2>
      </div>

      <ul className="mx-auto space-y-4 md:columns-2 md:gap-6 md:space-y-6 lg:columns-3">
        <li className="break-inside-avoid">
          <figure className="relative h-full w-full max-w-[500px] rounded-xl border border-gray-200 bg-orange-50 p-6">
            <a
              href="https://www.reddit.com/r/SideProject/comments/1fbrbie/i_made_a_free_landing_page_template_for_microsaas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <blockquote className="border-b pb-4 text-lg font-semibold">
                Your landing page is one of the cleanest setups I have seen. Is
                there a video or a guide on how to set it up on my server and
                edit it?
              </blockquote>
            </a>
            <figcaption>
              <div className="mt-4 flex items-center gap-4">
                <img
                  src="/users/avatar_default_1.png"
                  alt="user"
                  className="pointer-events-none inline-block h-12 w-12 shrink-0 rounded-full"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Reddit user</p>
                  <p className="text-sm">@user</p>
                </div>
              </div>
            </figcaption>
          </figure>
        </li>

        <li className="break-inside-avoid">
          {/* <Tweet id={tweets[0]!.id} /> */}
        </li>

        <li className="break-inside-avoid">
          {/* <Tweet id={tweets[2]!.id} /> */}
        </li>

        <li className="break-inside-avoid">
          <figure className="relative h-full w-full max-w-[500px] rounded-xl border border-gray-200 bg-indigo-50 p-6">
            <a
              href="https://www.reddit.com/r/SideProject/comments/1fbrbie/i_made_a_free_landing_page_template_for_microsaas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <blockquote className="border-b pb-4 text-lg font-semibold">
                Nice and simple, good contribution.
              </blockquote>
            </a>
            <figcaption>
              <div className="mt-4 flex items-center gap-4">
                <img
                  src="/users/avatar_default_2.webp"
                  alt="user"
                  className="pointer-events-none inline-block h-12 w-12 shrink-0 rounded-full"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Y0gl3ts</p>
                  <p className="text-sm">@user</p>
                </div>
              </div>
            </figcaption>
          </figure>
        </li>

        <li className="break-inside-avoid">
          {/* <Tweet id={tweets[1]!.id} /> */}
        </li>

        <li className="break-inside-avoid">
          <figure className="relative h-full w-full max-w-[500px] rounded-xl border border-gray-200 bg-cyan-50 p-6">
            <a
              href="https://www.reddit.com/r/SaaS/comments/1elcw2f/i_made_a_free_landing_page_template_for_microsaas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <blockquote className="border-b pb-4 text-lg font-semibold">
                Awesome work! Giving you a star on Github right now!
              </blockquote>
            </a>
            <figcaption>
              <div className="mt-4 flex items-center gap-4">
                <img
                  src="/users/avatar_default_4.webp"
                  alt="user"
                  className="pointer-events-none inline-block h-12 w-12 shrink-0 rounded-full"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">HalfMan-HalfAI</p>
                  <p className="text-sm">@user</p>
                </div>
              </div>
            </figcaption>
          </figure>
        </li>

        <li className="break-inside-avoid">
          {/* <Tweet id={tweets[4]!.id} /> */}
        </li>

        <li className="break-inside-avoid">
          <figure className="relative h-full w-full max-w-[500px] rounded-xl border border-gray-200 bg-green-50 p-6">
            <a
              href="https://www.reddit.com/r/SaaS/comments/1elcw2f/i_made_a_free_landing_page_template_for_microsaas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <blockquote className="border-b pb-4 text-lg font-semibold">
                Looks pretty awesome. Now I just need a product to sell.
              </blockquote>
            </a>
            <figcaption>
              <div className="mt-4 flex items-center gap-4">
                <img
                  src="/users/avatar_default_1.png"
                  alt="user"
                  className="pointer-events-none inline-block h-12 w-12 shrink-0 rounded-full"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">SpezJailbaitMod</p>
                  <p className="text-sm">@user</p>
                </div>
              </div>
            </figcaption>
          </figure>
        </li>

        <li className="break-inside-avoid">
          {/* <Tweet id={tweets[5]!.id} /> */}
        </li>
        <li className="break-inside-avoid">
          {/* <Tweet id={tweets[6]!.id} /> */}
        </li>

        <li className="cursor-pointer break-inside-avoid">
          <figure className="relative h-full w-full max-w-[500px] transform rounded-xl border border-gray-200 bg-gradient-to-tr from-blue-200 via-indigo-200 to-teal-200 p-6 transition-all duration-300 ease-in-out hover:rotate-2 hover:scale-105 hover:shadow-lg">
            <blockquote className="border-b pb-4 text-lg font-semibold">
              This could be you. Try it for free today! Use this as a template,
              clone to your local, npm install then off you go🚀
            </blockquote>
            <figcaption>
              <div className="mt-4 flex items-center gap-4">
                <img
                  src="/users/user-5.jpg"
                  alt="user"
                  className="pointer-events-none inline-block h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-gray-300"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Your name</p>
                  <p className="text-sm">@You</p>
                </div>
              </div>
            </figcaption>
          </figure>
        </li>
      </ul>
    </MaxWidthWrapper>
  );
}

export default Testimonials;
