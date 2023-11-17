import { IonCard, IonItem, IonList, IonNote } from "@ionic/react";
import { Event } from "../context";
import EventCard from "./EventCard";

interface Props {
  events: Event[] | null;
  lines?: "full" | "inset" | "none";
  isShadow?: true | false | undefined;
}

const EventCardList = ({ events, lines, isShadow }: Props) => {
  if (events == null) {
    return (
      <IonList class='eventContainer'>
      {Array(3).fill({id: null}).map((item, index) => (
        <IonItem key={index} lines={lines}>
          <EventCard event={item} isShadow={isShadow}></EventCard>
        </IonItem>
      ))}
    </IonList>
    )
  }

  if (events.length === 0) {
    return (
      <div style={{textAlign: "center", margin: "15px"}}>
        <IonNote>没有更多的活动了</IonNote>
      </div>
    )
  }

  return (
    <IonList class='eventContainer'>
      {events.map((item, index) => (
        <IonItem key={item.id} lines={lines}>
          <EventCard event={item} isShadow={isShadow}></EventCard>
        </IonItem>
      ))}
    </IonList>
  );
};

export default EventCardList;