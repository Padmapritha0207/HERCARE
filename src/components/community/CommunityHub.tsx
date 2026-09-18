import React, { useState } from 'react';
import { mockCommunityGroups, mockCommunityPosts } from '../../data/mockData';
import { 
  MessageSquare, 
  Users, 
  ThumbsUp, 
  MessageCircle, 
  ShieldAlert, 
  CheckCircle2, 
  Flag, 
  ShieldCheck, 
  Sparkles,
  Search,
  Heart
} from 'lucide-react';
import { triggerConfetti } from '../../utils/confetti';

export const CommunityHub: React.FC = () => {
  const [groups, setGroups] = useState(mockCommunityGroups);
  const [posts, setPosts] = useState(mockCommunityPosts);
  const [reportedPostId, setReportedPostId] = useState<string | null>(null);
  const [selectedGroupId, setSelectedGroupId] = useState<string>('all');
  const [newCommentInput, setNewCommentInput] = useState<{ [postId: string]: string }>({});

  const toggleJoinGroup = (groupId: string) => {
    setGroups(prev =>
      prev.map(g => g.id === groupId ? { ...g, isJoined: !g.isJoined, membersCount: g.isJoined ? g.membersCount - 1 : g.membersCount + 1 } : g)
    );
    triggerConfetti();
  };

  const toggleLikePost = (postId: string) => {
    setPosts(prev =>
      prev.map(p => p.id === postId ? { ...p, isLiked: !p.isLiked, likes: p.isLiked ? p.likes - 1 : p.likes + 1 } : p)
    );
  };

  const handleReportPost = (postId: string) => {
    setReportedPostId(postId);
    setTimeout(() => setReportedPostId(null), 3500);
  };

  const handleAddComment = (postId: string) => {
    const text = newCommentInput[postId];
    if (!text || !text.trim()) return;

    setPosts(prev =>
      prev.map(p => p.id === postId ? { ...p, commentsCount: p.commentsCount + 1 } : p)
    );
    setNewCommentInput(prev => ({ ...prev, [postId]: '' }));
    triggerConfetti();
  };

  const filteredPosts = selectedGroupId === 'all'
    ? posts
    : posts.filter(p => p.groupId === selectedGroupId);

  return (
    <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto pb-16 text-left">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#200C26] via-[#441B50] to-[#5C246C] text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="space-y-3 max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6C8F0]/20 text-[#E6C8F0] text-xs font-bold border border-[#E6C8F0]/30">
            <Heart className="w-4 h-4 text-[#E6C8F0]" />
            <span>Gentle Peer Solidarity</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Community Circles
          </h1>
          <p className="text-xs sm:text-base text-[#DDD4EC] leading-relaxed">
            A compassionate space to connect with fellow working mothers navigating the exact same milestones. Moderated, empathetic, and always respectful.
          </p>
        </div>
      </div>

      {/* Reassuring Moderation Notice */}
      <div className="p-4 rounded-2xl bg-[#F8F6F3] border border-[#E2D9CE] text-[#5A5368] text-xs flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-5 h-5 text-[#265942] flex-shrink-0" />
          <span>
            <strong>Safe Motherhood Sanctuary:</strong> All circles are thoughtfully moderated by certified perinatal care guides and are <strong>educational and supportive</strong>. For medical guidance, visit the Professional Care tab.
          </span>
        </div>
      </div>

      {reportedPostId && (
        <div className="p-3.5 bg-[#F1F8F4] rounded-2xl border border-[#DCEEE4] text-xs text-[#183B2B] font-bold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#265942]" />
          <span>Thank you. This post has been gently flagged for clinical review.</span>
        </div>
      )}

      {/* Community Groups Carousel / Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-[#1C1822] uppercase tracking-wider">
            Explore Empathetic Circles
          </span>
          <button 
            onClick={() => setSelectedGroupId('all')}
            className="text-xs font-semibold text-[#5C246C] hover:underline cursor-pointer"
          >
            Show All Circles
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {groups.map((grp) => (
            <div
              key={grp.id}
              onClick={() => setSelectedGroupId(grp.id)}
              className={`p-5 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between ${
                selectedGroupId === grp.id
                  ? 'border-[#5C246C] bg-[#FAF4FD] shadow-xs ring-2 ring-[#E6C8F0]'
                  : 'border-[#EBE6DF] bg-white hover:border-[#DDD4EC]'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#5C246C]">
                    {grp.category}
                  </span>
                  <span className="text-[11px] text-[#756D84] font-medium">
                    {grp.membersCount} moms
                  </span>
                </div>

                <h3 className="text-sm font-bold text-[#1C1822] leading-tight">
                  {grp.name}
                </h3>
                <p className="text-[11px] text-[#5A5368] leading-relaxed line-clamp-2">
                  {grp.description}
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-[#EBE6DF]/70 flex items-center justify-between">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleJoinGroup(grp.id);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                    grp.isJoined
                      ? 'bg-[#FAF7F4] text-[#5A5368] border border-[#EBE6DF]'
                      : 'bg-[#441B50] hover:bg-[#301339] text-white shadow-xs'
                  }`}
                >
                  {grp.isJoined ? 'Joined 🌸' : 'Join Circle'}
                </button>

                <span className="text-[11px] font-semibold text-[#5C246C]">
                  {selectedGroupId === grp.id ? 'Viewing' : 'View'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Discussions Feed */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-[#1C1822] uppercase tracking-wider">
            Warm Community Conversations
          </span>
        </div>

        <div className="space-y-4">
          {filteredPosts.map((post) => (
            <div key={post.id} className="p-6 rounded-3xl bg-white border border-[#EBE6DF] shadow-xs space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#5C246C] to-[#A06CB5] flex items-center justify-center text-white font-bold text-xs shadow-xs">
                    {post.authorName[0]}
                  </div>
                  <div>
                    <div className="font-bold text-xs text-[#1C1822]">{post.authorName}</div>
                    <div className="text-[11px] text-[#756D84]">{post.authorBadge} • {post.timeAgo}</div>
                  </div>
                </div>

                <button
                  onClick={() => handleReportPost(post.id)}
                  className="p-1.5 text-[#756D84] hover:text-[#5C246C] rounded-lg hover:bg-[#FAF4FD] transition-colors cursor-pointer"
                  title="Report post to moderation"
                >
                  <Flag className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-base text-[#1C1822]">
                  {post.title}
                </h4>
                <p className="text-xs text-[#5A5368] leading-relaxed whitespace-pre-wrap">
                  {post.content}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {post.tags.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-0.5 rounded-lg bg-[#FAF4FD] text-[#5C246C] text-[10px] font-medium border border-[#E6C8F0]/60">
                    #{t}
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t border-[#EBE6DF]/70 flex items-center justify-between text-xs text-[#756D84]">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => toggleLikePost(post.id)}
                    className={`flex items-center gap-1.5 font-semibold transition-colors cursor-pointer ${
                      post.isLiked ? 'text-[#5C246C]' : 'text-[#756D84] hover:text-[#1C1822]'
                    }`}
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span>{post.likes} Helpful</span>
                  </button>

                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.commentsCount} Comments</span>
                  </span>
                </div>
              </div>

              {/* Add Comment Input */}
              <div className="pt-2 flex items-center gap-2">
                <input
                  type="text"
                  value={newCommentInput[post.id] || ''}
                  onChange={(e) => setNewCommentInput({ ...newCommentInput, [post.id]: e.target.value })}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleAddComment(post.id);
                  }}
                  placeholder="Share a gentle, encouraging word..."
                  className="flex-1 px-4 py-2 rounded-xl border border-[#EBE6DF] text-xs text-[#1C1822] placeholder-[#756D84] focus:border-[#5C246C] focus:outline-none"
                />
                <button
                  onClick={() => handleAddComment(post.id)}
                  className="px-4 py-2 rounded-xl bg-[#301339] hover:bg-[#441B50] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Send
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
