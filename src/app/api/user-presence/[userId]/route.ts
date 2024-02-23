import {getUserPresence} from '@/utils/slack/get-user-presence'

export async function GET(request: Request, {params}: {params: {userId: string}}) {
  const {presence, error} = await getUserPresence(params.userId)
  if (error) return Response.json({error}, {status: 500})
  return Response.json({presence})
}
