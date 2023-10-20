import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonButton, IonContent, IonLabel, IonBadge, IonHeader, IonCardSubtitle, IonIcon } from '@ionic/react';
import './EventCard.scss';
import { Event } from '../context';
import { folderOpenOutline, pricetagsOutline } from 'ionicons/icons';

interface EventCardProps {
	event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
	const departmentNames: string = event.departments.map((department) => department.departmentName).join(' ');
	const href = `/event/${event.id}`;
	return (
		<IonCard className='eventCard' href={href}>
			<IonCardHeader>
				<IonCardTitle>{event.title}</IonCardTitle>
				<IonCardSubtitle>{departmentNames}</IonCardSubtitle>
			</IonCardHeader>
			<IonCardContent>
				<p>{event.description}</p>
				<div className='categryBox'>
          <div className='typeBox'>
            <IonIcon icon={folderOpenOutline}></IonIcon>
            <p>{event.eventType.typeName}</p>
          </div>
          <div className='tagBox'>
            <IonIcon icon={pricetagsOutline}></IonIcon>
            <p>{event.tag}</p>
          </div>
        </div>
			</IonCardContent>
			<IonButton color="light" size="small" expand="block" disabled={event.state !== "CHECKING_IN"}>报名</IonButton>
		</IonCard>
	);
};

export default EventCard;