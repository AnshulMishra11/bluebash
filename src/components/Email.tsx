import React, { useState } from 'react';
import { Mail, Inbox, Send as SendIcon, Trash, Edit, Star, StarOff } from 'lucide-react';

const Email = () => {
  const [activeFolder, setActiveFolder] = useState('inbox');
  const [emails] = useState({
    inbox: [
      {
        id: 1,
        subject: "Weekly Team Update",
        sender: "team@company.com",
        preview: "Here's this week's progress update and next steps...",
        date: "10:30 AM",
        starred: true
      },
      {
        id: 2,
        subject: "Project Timeline",
        sender: "project-manager@company.com",
        preview: "Please review the updated project timeline for Q2...",
        date: "Yesterday",
        starred: false
      },
      {
        id: 3,
        subject: "Meeting Notes",
        sender: "secretary@company.com",
        preview: "Attached are the notes from today's meeting...",
        date: "Mar 15",
        starred: false
      },
      {
        id: 4,
        subject: "Client Presentation Feedback",
        sender: "client@external.com",
        preview: "Thank you for the presentation. Here are our thoughts...",
        date: "Mar 14",
        starred: true
      },
      {
        id: 5,
        subject: "System Maintenance Notice",
        sender: "it@company.com",
        preview: "The system will be down for maintenance this weekend...",
        date: "Mar 13",
        starred: false
      }
    ],
    sent: [
      {
        id: 6,
        subject: "Re: Project Proposal",
        recipient: "client@external.com",
        preview: "Here's the updated proposal with the requested changes...",
        date: "Mar 15",
        starred: false
      },
      {
        id: 7,
        subject: "Team Meeting Schedule",
        recipient: "team@company.com",
        preview: "Let's schedule our weekly sync for Thursday at 2 PM...",
        date: "Mar 14",
        starred: false
      },
      {
        id: 8,
        subject: "Vacation Request",
        recipient: "hr@company.com",
        preview: "I would like to request vacation days for next month...",
        date: "Mar 12",
        starred: false
      }
    ],
    trash: [
      {
        id: 9,
        subject: "Old Newsletter",
        sender: "newsletter@spam.com",
        preview: "Check out our latest offers and updates...",
        date: "Mar 10",
        starred: false
      },
      {
        id: 10,
        subject: "Outdated Invoice",
        sender: "accounting@company.com",
        preview: "Please find attached the invoice for February...",
        date: "Mar 8",
        starred: false
      }
    ]
  });

  const folders = [
    { key: 'inbox', icon: Inbox, label: 'Inbox', count: emails.inbox.length },
    { key: 'sent', icon: SendIcon, label: 'Sent', count: emails.sent.length },
    { key: 'trash', icon: Trash, label: 'Trash', count: emails.trash.length },
  ];

  const currentEmails = emails[activeFolder as keyof typeof emails];

  return (
    <div className="bg-white shadow-lg rounded-lg h-[600px] flex">
      {/* Sidebar */}
      <div className="w-48 border-r bg-gray-50">
        <div className="p-4">
          <button className="w-full bg-blue-500 text-white rounded-lg px-4 py-2 flex items-center justify-center space-x-2 hover:bg-blue-600 transition-colors">
            <Edit className="h-4 w-4" />
            <span>Compose</span>
          </button>
        </div>
        <nav className="space-y-1 p-2">
          {folders.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveFolder(item.key)}
              className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 ${
                activeFolder === item.key ? 'bg-blue-50 text-blue-600' : ''
              }`}
            >
              <item.icon className="h-4 w-4" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.count > 0 && (
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  activeFolder === item.key 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {item.count}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Email List */}
      <div className="flex-1 flex flex-col">
        <div className="border-b px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800 capitalize">{activeFolder}</h2>
        </div>
        <div className="overflow-y-auto flex-1">
          {currentEmails.map((email) => (
            <div
              key={email.id}
              className="px-6 py-4 border-b hover:bg-gray-50 cursor-pointer group"
            >
              <div className="flex items-center space-x-3">
                <button className="text-gray-400 hover:text-yellow-400 transition-colors">
                  {email.starred ? (
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ) : (
                    <StarOff className="h-5 w-5 opacity-0 group-hover:opacity-100" />
                  )}
                </button>
                <Mail className="h-5 w-5 text-gray-400" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {email.subject}
                    </p>
                    <p className="text-sm text-gray-500">{email.date}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500 truncate">
                      {activeFolder === 'sent' ? email.recipient : email.sender}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 truncate">
                    {email.preview}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Email;