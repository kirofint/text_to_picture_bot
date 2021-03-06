import { Context } from 'telegraf'

export function isGroup (ctx: Context, next: () => any) {
	if (
		['group', 'supergroup'].includes(ctx.chat?.type)
	) return next()
}

export function isReply (ctx: Context, next: () => any) {
  if (!ctx.message?.entities &&
		ctx.message?.reply_to_message?.from.id === ctx.botInfo.id
  ) return next()
}

export function removeMsgFrom (ctx: Context, next: () => any) {
  ctx.deleteMessage(ctx.message.message_id).catch(e => null)
  return next()
}