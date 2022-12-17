from PyPDF2 import PdfReader, PdfWriter
from datetime import datetime

org = "4 RS"
location = "Bldg. 17106"
currentDay = datetime.now().day
currentMonth = datetime.now().month
currentYear = datetime.now().year

def populateEntry():
    pass

reader = PdfReader('af1109.pdf')
writer = PdfWriter()
writer.add_page(reader.pages[0])

#fields = reader.get_form_text_fields()

# write header values
writer.update_page_form_field_values(
    writer.pages[0], {
        "Year[0]": currentYear,
        "Month[0]": currentMonth,
        "Orgnzatn[0]" : org,
        "Location[0]" : location 
    }
)

# populate entry log

# write "output" to PyPDF2-output.pdf
with open("generated-af1109.pdf", "wb") as output_stream:
    writer.write(output_stream)