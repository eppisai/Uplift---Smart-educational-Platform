import win32com.client
import time
import os
ppSaveAsWMV = 37


def cover_ppt_to_wmv(ppt_src, wmv_target):
    ppt = win32com.client.Dispatch('PowerPoint.Application')
    presentation = ppt.Presentations.Open(ppt_src, WithWindow=False)
    presentation.CreateVideo(wmv_target, -1, 4, 720, 24, 60)
    start_time_stamp = time.time()
    while True:
        time.sleep(4)
        try:
            os.rename(wmv_target, wmv_target)
            print('success')
            break
        except Exception:
            pass
    end_time_stamp = time.time()
    print(end_time_stamp-start_time_stamp)
    ppt.Quit()
    pass


if __name__ == '__main__':
    cover_ppt_to_wmv('something.pptx', 'abc.wmv')
