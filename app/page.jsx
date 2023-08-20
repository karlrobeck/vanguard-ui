"use client";
import Accordion from "@/components/Accordion";
import Alert from "@/components/Alert";
import Avatar from "@/components/Avatar";
import Badge from "@/components/Badge";
import BlockQuotes from "@/components/BlockQuotes";
import Breadcrumbs from "@/components/Breadcrumbs";
import Button from "@/components/Button";
import Card from "@/components/Card";
import CloseButton from "@/components/CloseButton";
import Collapse from "@/components/Collapse";
import Dropdown from "@/components/Dropdown";
import Input from "@/components/Input";
import ListGroup from "@/components/ListGroup";
import Modal from "@/components/Modal";
import Nav from "@/components/Nav";
import Navbar from "@/components/Navbar";
import Spinner from "@/components/Spinner";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <Alert
        type="orange"
        className="fixed flex items-center justify-between gap-3 top-10 left-1/4 right-1/4"
      >
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-exclamation-triangle"
            viewBox="0 0 16 16"
          >
            <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
            <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
          </svg>
          <span className="font-bold underline">
            This System is Under Development
          </span>
        </div>
        <Alert.Toggle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </Alert.Toggle>
      </Alert>
      <section className="h-screen grid grid-cols-2">
        <div className="flex flex-col gap-3 justify-center">
          <h1 className="font-bold text-5xl">
            <span className="text-yellow-300">Vanguard UI,</span> Design crafted
            with Tailwind CSS
          </h1>
          <p>
            <span className="font-bold">Compatible With:</span> React
          </p>
          <p className="text-slate-200">
            Vanguard UI comprises a collection of pre-designed UI elements that
            are open-source and built upon the utility-first approach of the
            Tailwind CSS framework.
          </p>
          <Link href={"/docs"}>
            <Button className="bg-blue-500 w-full">Get Started</Button>
          </Link>
        </div>
        <div className="flex p-4 flex-col gap-3 items-center justify-center">
          <div className="flex gap-3 justify-center">
            <Button className="bg-blue-500">Primary</Button>
            <Button.Outline className="bg-blue-500">Secondary</Button.Outline>
            <Button className="bg-green-500">Success</Button>
            <Button className="bg-red-500">Danger</Button>
            <Button className="bg-orange-500">Warning</Button>
          </div>
          <Input placeholder="Enter some text" />
          <div className="flex gap-1">
            <Alert type="black" className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-exclamation-square"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
              </svg>
              Just an Alert
            </Alert>
            <Alert type="light" className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-exclamation-square"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
              </svg>
              Just an Alert
            </Alert>
            <Alert type="blue" className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-exclamation-square"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
              </svg>
              Just an Alert
            </Alert>
            <Alert type="red" className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-exclamation-square"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
              </svg>
              Just an Alert
            </Alert>
          </div>
          <Dropdown>
            <Dropdown.Toggle>
              <Button className="bg-blue-500">Dropdown</Button>
            </Dropdown.Toggle>
            <Dropdown.Content>
              <ListGroup>
                <ListGroup.Item>Option 1</ListGroup.Item>
                <ListGroup.Item>Option 2</ListGroup.Item>
                <ListGroup.Item>Option 3</ListGroup.Item>
              </ListGroup>
            </Dropdown.Content>
          </Dropdown>
          <Accordion>
            <Accordion.Item type="bordered">
              <Accordion.Header>Accordion Item 1</Accordion.Header>
              <Accordion.Body>Just a Text</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item type="bordered">
              <Accordion.Header>Accordion Item 2</Accordion.Header>
              <Accordion.Body>Just a Text</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item type="bordered">
              <Accordion.Header>Accordion Item 3</Accordion.Header>
              <Accordion.Body>Just a Text</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
      <section className="grid grid-cols-3">
        <div className="relative flex gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="currentColor"
            className="bi bi-file-earmark-check p-2 border rounded-lg w-1/2"
            viewBox="0 0 16 16"
          >
            <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
          </svg>
          <div className="space-y-3">
            <h2 className="font-semibold text-xl">Bunch of Components</h2>
            <p>
              Discover Vanguard UI&apos;s diverse components for crafting
              captivating interfaces. From buttons to cards, unleash your
              creativity whether you&apos;re a seasoned designer or a newcomer.
              Elevate your projects and create exceptional user experiences with
              Vanguard UI&apos;s versatile design elements.
            </p>
          </div>
        </div>
        <div className="relative flex gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="currentColor"
            className="bi bi-moon-stars p-2 border rounded-lg w-1/2"
            viewBox="0 0 16 16"
          >
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
            <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
          </svg>
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Dark Mode</h2>
            <p>
              Embrace the immersive experience ahead as Vanguard UI seamlessly
              embraces the dark mode. Dive into a world of elegance and reduced
              eye strain, where the interface transforms to match your
              preferences. With Vanguard UI, toggle effortlessly between light
              and dark modes, ensuring a visually pleasing journey tailored to
              your comfort.
            </p>
          </div>
        </div>
        <div className="relative flex gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="currentColor"
            className="bi bi-calendar2-check p-2 border rounded-lg w-1/2"
            viewBox="0 0 16 16"
          >
            <path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
            <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
          </svg>
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Support</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              dolorem quasi, iste reiciendis aut minima facilis corporis eveniet
              aspernatur dolorum perferendis laudantium dolor, numquam optio a
              saepe fuga molestiae. Iste!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
