import { IonButton, IonCard, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonRefresher, IonRefresherContent, IonThumbnail, IonToggle, IonToolbar, ToggleCustomEvent, useIonRouter } from '@ionic/react';
import { albumsOutline, logOutOutline, moon, pencilOutline, scanOutline, settingsOutline, sunnyOutline } from 'ionicons/icons';
import { ThemeContext } from '../components/ThemeChange';
import React, { useEffect, useState } from 'react';

import './Me.scss';
import OnDevAlert from '../components/OnDevAlert';
import { getUserInfo } from '../apis/user';
import Profile from '../components/Profile';
import { useUserInfoStore } from '../util/store';

const Me: React.FC = () => {
	const { themeToggle, toggleChange } = React.useContext(ThemeContext);
	const userInfoStore = useUserInfoStore((state) => state);
	const userInfo = userInfoStore.userInfo;
	const router = useIonRouter();
	const isLoggedIn = localStorage.getItem('token') !== null;

	const themeIcon = themeToggle ? moon : sunnyOutline;

	useEffect(() => {
		console.log(isLoggedIn);
		console.log(userInfo);


		if (isLoggedIn && userInfo === undefined) {
			getUserInfo().then((res) => {
				userInfoStore.updateUserInfo(res);
			});
		}
	}, [userInfo])

	const logOut = () => {
		localStorage.clear();
		userInfoStore.rmUserInfo();
	}

	const toHistoryEvents = () => {
		router.push("/history", 'forward');
	}

	const handleRefresh = () => {
		window.location.reload();
	}

	return (
		<IonPage>
			<IonHeader translucent={false}>
				<IonToolbar>
					<IonButton id='scaning' fill="clear" slot="end" size='small'>
						<IonIcon icon={scanOutline} color="primary"></IonIcon>
					</IonButton>
					<OnDevAlert trigger='scaning'></OnDevAlert>
					<IonButton fill='clear' slot='end' size='small' onClick={toggleChange}>
						<IonIcon icon={themeIcon} color="primary"></IonIcon>
					</IonButton>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
					<IonRefresherContent></IonRefresherContent>
				</IonRefresher>
				<div className='meWarpper'>
					<IonCard className='userProfileWarpper'>
						{isLoggedIn ? (
							<>
								<IonItem lines="none" id='userBasicInfo'>
									<IonThumbnail slot="start">
										<IonImg src={userInfo?.avatar !== null ? userInfo?.avatar : "/link.ico"} alt="avatar" className='userProfileAvatar' />
									</IonThumbnail>
									<h2 slot="start" className='userProfile__name'>{String(userInfo?.nickname)}</h2>
								</IonItem>
								<Profile trigger='userBasicInfo' ></Profile>
							</>
						) : (
							<IonItem onClick={() => { router.push("/login", "forward") }} lines="none">
								<IonThumbnail slot="start">
									<IonImg src="/link.ico" alt="avatar" className='userProfileAvatar' />
								</IonThumbnail>
								<h2 slot="start" className='userProfile__name'>请登录/注册</h2>
							</IonItem>
						)}
					</IonCard>
					<IonCard className='functionsWarpper'>
						<IonList>
							<IonItem button={true} onClick={toHistoryEvents} lines='full'>
								<IonIcon icon={albumsOutline} className='functionIcon'></IonIcon>
								<IonLabel>历史活动</IonLabel>
							</IonItem>
							<IonItem id='suggestion' button={true} lines='full'>
								<IonIcon icon={pencilOutline} className='functionIcon'></IonIcon>
								<IonLabel>意见反馈</IonLabel>
							</IonItem>
							<OnDevAlert trigger='suggestion'></OnDevAlert>
							<IonItem id='setting' button={true} lines='none'>
								<IonIcon icon={settingsOutline} className='functionIcon'></IonIcon>
								<IonLabel>设置</IonLabel>
							</IonItem>
							<OnDevAlert trigger='setting'></OnDevAlert>
						</IonList>
					</IonCard>
					<IonCard className='logoutWarpper'>
						<IonList>
							<IonItem button={true} onClick={logOut} lines='none'>
								<IonIcon icon={logOutOutline} color='danger' className='functionIcon'></IonIcon>
								<IonLabel color="danger">退出登录</IonLabel>
							</IonItem>
						</IonList>
					</IonCard>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Me;