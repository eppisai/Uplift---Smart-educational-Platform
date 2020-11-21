import os 
import cv2  
from PIL import Image  
from moviepy.editor import *




videoclip = VideoFileClip("mygeneratedvideo.avi")
audioclip = AudioFileClip("audioname.mp3")

new_audioclip = CompositeAudioClip([audioclip])
videoclip.audio = new_audioclip
videoclip.write_videofile("new_filename.mp4")