

import joblib
import features_extraction
import sys
import numpy as np

from features_extraction import LOCALHOST_PATH, DIRECTORY_NAME


def get_prediction_from_url(test_url):
    features_test = features_extraction.main(test_url)
    features_test = np.array(features_test).reshape((1, -1))

    clf = joblib.load(LOCALHOST_PATH + DIRECTORY_NAME + '/classifier/random_forest.pkl')

    pred = clf.predict(features_test)
    return int(pred[0])


def main():
    url = sys.argv[1]

    prediction = get_prediction_from_url(url)

    
    if prediction == 1:
        print("SAFE")
    else :
        print("WARNING")



if __name__ == "__main__":
    main()
