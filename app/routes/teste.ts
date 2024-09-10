import { json } from '@remix-run/node';
export const loader = async () => {
  return json({
    "metrics": {
      "total_results": 0,
      "total_pages": 0,
      "current_page": 0,
      "results_per_page": 0
    },
    "results": [
      {
        "id": "string",
        "status": "OPENED",
        "type": "chat",
        "contact_name": "string",
        "contact_phone": "string",
        "is_archived": true,
        "is_starred": true,
        "is_muted": true,
        "is_chatbot_active": true,
        "unread_messages": 0,
        "received_messages": 0,
        "sent_messages": 0,
        "scheduled_messages": 0,
        "created": "2024-09-10T13:32:56.993Z",
        "updated": "2024-09-10T13:32:56.993Z",
        "last_message_preview": "string",
        "last_sent_message": "2024-09-10T13:32:56.993Z",
        "last_received_message": "2024-09-10T13:32:56.993Z",
        "last_status_check": "2024-09-10T13:32:56.993Z",
        "last_performed_job": "2024-09-10T13:32:56.993Z",
        "picture": "string",
        "tags": [{}],
        "has_pending_actions": true,
        "delegated_users": ["string"],
        "delegated_groups": ["string"],
        "funnel_steps": ["string"],
        "phone_id": "string",
        "bot_context": {},
        "custom_fields": {}
      }
    ]
  });
};