import Head from "next/head";

import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "@/helpers/api-util";
function HomePage(props) {
  return (
    <div>
      <Head>
        <title>D_Events</title>
        <meta
          name="description"
          content="Finad a lot of events that will help you to evolve"
        />
      </Head>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
