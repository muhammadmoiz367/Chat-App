import React from 'react';
import styled from 'styled-components';
import { BiLogOut } from 'react-icons/bi';

import SendIcon from '../assets/images/sendBtn.png';
import Button from '../components/button';
import ProfileAvatar from '../assets/images/dummyProfileImg.png';

function ChatHome() {
  return (
    <ChatBox>
      <ChatListSection>
        <ChatProfileHeader>
          <img src={ProfileAvatar} />
          <span>Phillip Torff</span>
        </ChatProfileHeader>
        <ChatList>
          {Array.from({ length: 10 }).map((_, i) => (
            <ChatItem key={i}>
              <img src={ProfileAvatar} />
              <div>
                <div>
                  <Username>Phillip Torff</Username>
                  <Message>Thank you Phillip!</Message>
                </div>
                <Date>17/06/2020</Date>
              </div>
            </ChatItem>
          ))}
        </ChatList>
        <ChatLogout>
          <BiLogOut
            style={{
              width: '22px',
              height: '30px',
              color: '#6588DE',
              cursor: 'pointer',
            }}
          />
        </ChatLogout>
      </ChatListSection>
      <ChatWindow>
        <ChatArea>
          <InitalDate>17/06/2020</InitalDate>
          <MessagesList>
            <ChatMessageReceived>
              <Username>Phillip Torff</Username>
              <div>
                <img src={ProfileAvatar} style={{ visibility: 'visible' }} />
                <div>
                  <span>Hello m8!</span>
                  <span>15:02</span>
                </div>
              </div>
            </ChatMessageReceived>
            <ChatMessageReceived style={{ alignItems: 'flex-start' }}>
              <div>
                <img src={ProfileAvatar} style={{ visibility: 'hidden' }} />
                <div>
                  <span>
                    I have send the files back to ya it only took me about 60
                    mins this time was with testing too.
                  </span>
                  <span>15:02</span>
                </div>
              </div>
            </ChatMessageReceived>
            <ChatMessageSent>
              <Username>Phillip Torff</Username>
              <div>
                <div>
                  <span>15:02</span>
                  <span>Thank you Phillip!</span>
                </div>
                <img src={ProfileAvatar} style={{ visibility: 'visible' }} />
              </div>
            </ChatMessageSent>
            <ChatMessageSent>
              <div>
                <div>
                  <span>15:02</span>
                  <span>Thank you Phillip!</span>
                </div>
                <img src={ProfileAvatar} style={{ visibility: 'hidden' }} />
              </div>
            </ChatMessageSent>
            {/* {Array.from({ length: 3 }).map((_, i) => (
              <ChatMessage style={{ alignItems: i%2!==0 ? "flex-end" : "flex-start"}}>
              {i===0 && <Username>Phillip Torff</Username>}
              <div>
              <img src={ProfileAvatar} style={{visibility: i===0 ? "visible" : "hidden"}} />
                <div>
                  <span>I have send the files back to ya it only took me about 60 mins this time was with testing too.</span>
                  <span>15:02</span>
                </div>
              </div>
            </ChatMessage>
            ))} */}
          </MessagesList>
        </ChatArea>
        <ChatInputSection>
          <ChatInput placeholder='Type a new message...' />
          <Button
            styles={{
              width: '15%',
              marginTop: '0px',
              borderRadius: '0 20px 20px 0',
              height: '44px',
            }}
            text={'Submit'}
            icon={SendIcon}
          />
        </ChatInputSection>
      </ChatWindow>
    </ChatBox>
  );
}

export default ChatHome;

const ChatBox = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
`;

const ChatListSection = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 657px;
`;
const ChatProfileHeader = styled.div`
  background-color: #e3f6fc;
  height: 100px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding-left: 35px;
  border-radius: 0px 0px 14px 14px;
  span {
    margin-left: 10px;
    color: #52585d;
    font-size: 14px;
    font-weight: 600;
  }
`;

const ChatList = styled.ul`
  background-color: #e3f6fc;
  border-radius: 14px 14px 0px 0px;
  box-sizing: border-box;
  padding: 24px 20px;
  margin: 10px 0 0 0;
  list-style: none;
  width: 100%;
  height: 515px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #6588de;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #d0d9df;
  }
`;

const ChatWindow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ChatItem = styled.li`
  display: flex;
  flex-direction: row;
  padding: 15px;
  img {
    width: 45px;
    height: 45px;
    margin-right: 10px;
    border-radius: 50px;
  }
  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    div {
      display: flex;
      flex-direction: column;
    }
  }
  :hover {
    background: #6588de;
    box-shadow: 0px 8px 40px rgba(0, 72, 251, 0.3);
    border-radius: 14px;
    span {
      color: #f2f6f7 !important;
    }
  }
`;

const ChatLogout = styled.div`
  display: flex;
  border-top: 1px solid #d0d9df;
  justify-content: flex-start;
  align-items: center;
  background-color: #e3f6fc;
  padding: 25px 30px;
  box-sizing: border-box;
  width: 100%;
  padding-left: 35px;
`;

const Username = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #52585d;
`;
const Message = styled.span`
  font-size: 12px;
  color: #96a9ba;
  margin-top: 5px;
`;
const Date = styled.span`
  font-size: 12px;
  color: #96a9ba;
  margin-top: 5px;
`;

const ChatArea = styled.div`
  height: 498px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 40px 60px;
  /* justify-content: flex-end; */
`;
const InitalDate = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 110px;
  height: 30px;
  border-radius: 20px;
  background-color: #6588de;
  color: #fdfdfe;
`;
const MessagesList = styled.ul`
  border-radius: 14px 14px 0px 0px;
  padding: 0;
  box-sizing: border-box;
  margin: 10px 0 0 0;
  list-style: none;
  width: 100%;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #6588de;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #d0d9df;
  }
`;
const ChatMessageReceived = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 45px;
    height: 45px;
    margin-top: 5px;
    margin-right: 10px;
    border-radius: 50px;
  }
  div {
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      background-color: #e3f6fc;
      width: auto;
      height: 60px;
      min-width: 170px;
      max-width: 400px;
      box-sizing: border-box;
      border-radius: 0px 14px 14px 14px;
      padding-inline: 20px;
      padding-block: 10px;
      span:first-child {
        align-self: flex-start;
        color: #52585d;
        font-size: 12px;
      }
      span:last-child {
        align-self: flex-end;
        color: #6588de;
        font-size: 10px;
      }
    }
  }
`;
const ChatMessageSent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  img {
    width: 45px;
    height: 45px;
    margin-top: 5px;
    margin-left: 10px;
    border-radius: 50px;
  }
  div {
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      background-color: #F3BA4A;
      width: auto;
      height: 60px;
      min-width: 170px;
      max-width: 400px;
      box-sizing: border-box;
      border-radius: 14px 0px 14px 14px;
      padding-inline: 20px;
      padding-block: 10px;
      span:first-child {
        align-self: flex-end;
        color: #FDFDFE;
        font-size: 10px;
      }
      span:last-child {
        align-self: flex-start;
        color: #FDFDFE;
        font-size: 12px;
      }
    }
  }
`;

const ChatInputSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 60px;
`;

const ChatInput = styled.input`
  width: 90%;
  height: 40px;
  background-color: #fdfdfd;
  font-size: 14px;
  border-radius: 20px 0px 0px 20px;
  outline: none;
  color: #96a9ba;
  border: 1px solid rgba(150, 169, 186, 0.7);
  padding-inline: 15px;
  margin-block: 12px;
  ::placeholder {
    color: #96a9ba;
  }
`;

const SendButton = styled.button`
  width: 10%;
  height: 40px;
  background-color: #6588de;
`;
