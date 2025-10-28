import { atom, useAtom } from 'jotai';
import React from 'react';

interface Member {
  id: number;
  name: string;
  birthday: string;
}

export const membersAtom = atom<Member[]>([]);

export const memberAtom = (id: number) =>
  atom(
    (get) => get(membersAtom).find((m) => m.id === id),
    (get, set, updated: Partial<Member>) => {
      const members = get(membersAtom);
      set(
        membersAtom,
        members.map((m) =>
          m.id === id ? { ...m, ...updated } : m
        )
      );
    }
  );

const MemberRow: React.FC<{ id: number }> = ({ id }) => {
  const [member, setMember] = useAtom(memberAtom(id));

  if (!member) return null;

  return (
    <div>
      <span>{member.name}</span>{' '}
      <span>{member.birthday}</span>{' '}
      <button onClick={() => setMember({ birthday: '2000-01-01' })}>
        Update Birthday
      </button>
    </div>
  );
};

const MemberList: React.FC<{ members: Member[] }> = ({ members }) => {
  const [, setMembers] = useAtom(membersAtom);

  React.useEffect(() => {
    setMembers(members);
  }, [members, setMembers]);

  return (
    <div>
      {members.map((m) => (
        <MemberRow key={m.id} id={m.id} />
      ))}
    </div>
  );
};