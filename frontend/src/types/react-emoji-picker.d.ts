declare module "react-emoji-picker" {
  const EmojiPicker: React.FC<{
    onEmojiClick: (emoji: string) => void;
  }>;

  export default EmojiPicker;
}