import { create } from 'zustand';
import React from 'react';

interface Member {
  id: number;
  name: string;
  birthdate: string;
}

interface Store {
  members: Member[];
  updateMember: (id: number, updated: Partial<Member>) => void;
  setMembers: (members: Member[]) => void;
}

export const useStore = create<Store>((set) => ({
  members: [],

  updateMember: (id, updated) =>
    set((state) => ({
      members: state.members.map((m) =>
        m.id === id ? { ...m, ...updated } : m
      ),
    })),

  setMembers: (members) => set({ members }),
}));

const useMember = (id: number) =>
  useStore((state) => state.members.find((m) => m.id === id));

const MemberRow: React.FC<{ id: number }> = ({ id }) => {
  const member = useMember(id);
  const updateMember = useStore((state) => state.updateMember);

  if (!member) return null;

  return (
    <div>
      <span>{member.name}</span>{' '}
      <span>{member.birthdate}</span>{' '}
      <button onClick={() => updateMember(id, { birthdate: '2000-01-01' })}>
        Update Birthdate
      </button>
    </div>
  );
};

export const MemberList: React.FC<{ initialMembers: Member[] }> = ({ initialMembers }) => {
  const setMembers = useStore((state) => state.setMembers);
  const members = useStore((state) => state.members);

  React.useEffect(() => {
    setMembers(initialMembers);
  }, [initialMembers, setMembers]);

  return (
    <div>
      {members.map((m) => (
        <MemberRow key={m.id} id={m.id} />
      ))}
    </div>
  );
};